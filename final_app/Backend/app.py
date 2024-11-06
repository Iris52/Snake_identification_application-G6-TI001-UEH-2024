import datetime
from flask import Flask, json, render_template, request, redirect, jsonify
from PIL import Image
import os
from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd
from flask_cors import CORS
import time

# Đọc dữ liệu từ file CSV
df = pd.read_csv('C:/Hoc_ki_cuoi-2024/AI_project/data-snake/data-snake/Csv/test.csv')
df = pd.read_csv('C:/Hoc_ki_cuoi-2024/AI_project/data-snake/data-snake/Csv/train.csv')
#df = pd.read_csv('id_30.csv')
app = Flask(__name__)
CORS(app, resources={
    r"/upload": {"origins": "*"},
    r"/save_search": {"origins": "*"},
    r"/get_history": {"origins": "*"}
})# Load all pre-trained models
models = {
    
    "Binomial": {
        #"MobileNetV2": load_model('C:/Hoc_ki_cuoi-2024/AI_project/my_backend-old/my_backend/Binomial/MobileNetV2.keras'),
        "EfficientNetV2B3": load_model('inception.h5'),
        #"DenseNet121": load_model('C:/Hoc_ki_cuoi-2024/AI_project/my_backend-old/my_backend/Binomial/DenseNet121.keras'),
        #"ResNet50V2": load_model('C:/Hoc_ki_cuoi-2024/AI_project/my_backend-old/my_backend/Binomial/ResNet50V2.keras'),
        #"EfficientNetV2B3": load_model('C:/Hoc_ki_cuoi-2024/AI_project/my_backend-old/my_backend/Binomial/EfficientNetV2B3.keras')

        },
    
}

# Class labels (modify as per your model)
labels = {
    "Binomial": {
        "0": "Agkistrodon contortrix", "1": "Agkistrodon piscivorus", "2": "Ahaetulla nasuta", "3": "Ahaetulla prasina",
        "4": "Arizona elegans", "5": "Aspidites melanocephalus", "6": "Atractus crassicaudatus", "7": "Austrelaps superbus",
        "8": "Bitis arietans", "9": "Bitis gabonica", "10": "Boa constrictor", "11": "Bogertophis subocularis",
        "12": "Boiga irregularis", "13": "Boiga kraepelini", "14": "Bothriechis schlegelii", "15": "Bothrops asper",
        "16": "Bothrops atrox", "17": "Bungarus multicinctus", "18": "Carphophis amoenus", "19": "Carphophis vermis",
        "20": "Causus rhombeatus", "21": "Cemophora coccinea", "22": "Charina bottae", "23": "Chrysopelea ornata",
        "24": "Clonophis kirtlandii", "25": "Contia tenuis", "26": "Corallus caninus", "27": "Corallus hortulanus",
        "28": "Coronella girondica", "29": "Crotalus adamanteus", "30": "Crotalus atrox", "31": "Crotalus cerastes",
        "32": "Crotalus cerberus", "33": "Crotalus lepidus", "34": "Crotalus molossus", "35": "Crotalus ornatus",
        "36": "Crotalus ruber", "37": "Crotalus scutulatus", "38": "Crotalus stephensi", "39": "Crotalus tigris",
        "40": "Crotalus triseriatus", "41": "Crotalus viridis", "42": "Crotaphopeltis hotamboeia", "43": "Daboia russelii",
        "44": "Dendrelaphis pictus", "45": "Dendrelaphis punctulatus", "46": "Dendroaspis polylepis", "47": "Diadophis punctatus",
        "48": "Drymarchon couperi", "49": "Elaphe dione", "50": "Epicrates cenchria", "51": "Eunectes murinus",
        "52": "Farancia abacura", "53": "Gonyosoma oxycephalum", "54": "Hemorrhois hippocrepis", "55": "Heterodon nasicus",
        "56": "Heterodon simus", "57": "Hierophis viridiflavus", "58": "Hypsiglena torquata", "59": "Imantodes cenchoa",
        "60": "Lampropeltis alterna", "61": "Lampropeltis calligaster", "62": "Lampropeltis getula", "63": "Lampropeltis pyromelana",
        "64": "Lampropeltis triangulum", "65": "Lampropeltis zonata", "66": "Laticauda colubrina", "67": "Leptodeira annulata",
        "68": "Leptophis ahaetulla", "69": "Leptophis diplotropis", "70": "Leptophis mexicanus", "71": "Lycodon capucinus",
        "72": "Malpolon monspessulanus", "73": "Masticophis bilineatus", "74": "Masticophis lateralis", "75": "Masticophis schotti",
        "76": "Masticophis taeniatus", "77": "Micrurus fulvius", "78": "Micrurus tener", "79": "Morelia spilota",
        "80": "Morelia viridis", "81": "Naja atra", "82": "Naja naja", "83": "Naja nivea", "84": "Natrix maura",
        "85": "Nerodia cyclopion", "86": "Nerodia floridana", "87": "Nerodia taxispilota", "88": "Ninia sebae",
        "89": "Opheodrys aestivus", "90": "Ophiophagus hannah", "91": "Oxybelis aeneus", "92": "Oxyuranus scutellatus",
        "93": "Phyllorhynchus decurtatus", "94": "Pituophis catenifer", "95": "Pituophis deppei", "96": "Protobothrops mucrosquamatus",
        "97": "Psammodynastes pulverulentus", "98": "Pseudaspis cana", "99": "Pseudechis australis", "100": "Pseudechis porphyriacus",
        "101": "Pseudonaja textilis", "102": "Python molurus", "103": "Python regius", "104": "Regina septemvittata",
        "105": "Rhabdophis subminiatus", "106": "Rhabdophis tigrinus", "107": "Rhadinaea flavilata", "108": "Rhinocheilus lecontei",
        "109": "Salvadora grahamiae", "110": "Salvadora hexalepis", "111": "Senticolis triaspis", "112": "Sistrurus catenatus",
        "113": "Sistrurus miliarius", "114": "Spilotes pullatus", "115": "Tantilla coronata", "116": "Tantilla gracilis",
        "117": "Tantilla hobartsmithi", "118": "Tantilla planiceps", "119": "Thamnophis atratus", "120": "Thamnophis couchii",
        "121": "Thamnophis cyrtopsis", "122": "Thamnophis marcianus", "123": "Thamnophis ordinoides", "124": "Thamnophis proximus",
        "125": "Thamnophis radix", "126": "Trimeresurus stejnegeri", "127": "Tropidoclonion lineatum", "128": "Tropidolaemus subannulatus",
        "129": "Tropidolaemus wagleri", "130": "Vipera ammodytes", "131": "Vipera aspis", "132": "Vipera seoanei",
        "133": "Virginia valeriae", "134": "Xenochrophis piscator"
    },
  
   }

# Folder to save uploaded images
UPLOAD_FOLDER = 'static/uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Hàm lưu lịch sử tìm kiếm vào file JSON
def save_search_history(binomial_label, predictions, additional_info, image_url):
    # Chuyển đổi các giá trị trong additional_info sang kiểu dữ liệu chuẩn
    sanitized_additional_info = {
        key: int(value) if isinstance(value, (np.integer, np.int64)) 
        else float(value) if isinstance(value, (np.float32, np.float64)) 
        else value
        for key, value in additional_info.items()
    }

    history_entry = {
        "timestamp": datetime.datetime.now().isoformat(),
        "label": binomial_label,
        "predictions": predictions,
        "additional_info": sanitized_additional_info,
        'image_url': image_url,
    }

    # Đọc lịch sử từ file JSON
    try:
        with open("search_history.json", "r") as f:
            history = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        history = []

    # Thêm mục mới vào lịch sử
    history.append(history_entry)
    
    # Ghi lịch sử vào file JSON
    try:
        with open("search_history.json", "w") as f:
            json.dump(history, f, indent=4)
    except Exception as e:
        print(f"Lỗi khi ghi vào file: {e}")

# Route để lưu lịch sử tìm kiếm
@app.route('/save_search', methods=['POST'])
def save_search():
    data = request.json
    binomial_label = data.get("label")
    predictions = data.get("predictions")
    additional_info = data.get("additional_info", {})
    image_url = data.get("image_url", "")
    save_search_history(binomial_label, predictions, additional_info, image_url)
    return jsonify({"message": "Lưu lịch sử tìm kiếm thành công"}), 200

# Route để lấy lịch sử tìm kiếm
@app.route('/get_history', methods=['GET'])
def get_search_history():
    try:
        with open("search_history.json", "r") as f:
            history = json.load(f)
    except (FileNotFoundError, ValueError):  
        history = []

    return jsonify(history), 200


# Prediction function
def predict_image(image_path, model_dict, feature_type):
    image = Image.open(image_path).resize((128, 128))
    image = np.expand_dims(np.array(image) / 255.0, axis=0)
    
    predictions = {}
    for model_name, model in model_dict.items():
        prediction = np.argmax(model.predict(image))
        predictions[model_name] = labels[feature_type][str(prediction)]
    return predictions

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No file uploaded"}), 400
    
    if file:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

        # Generate relative path for client usage
        relative_path = f'static/uploads/{file.filename}'


        # Dự đoán cho mô hình binomial
        binomial_predictions = predict_image(file_path, models["Binomial"], "Binomial")
        
        # Lấy nhãn binomial đầu tiên từ dự đoán
        binomial_label = list(binomial_predictions.values())[0]
        additional_info = get_additional_info(binomial_label)

        save_search_history(binomial_label, binomial_predictions, additional_info, relative_path)
        return jsonify({
            'binomial_predictions': {
                'Binomial': binomial_label  # Sửa đổi tại đây
            },
            'additional_info': additional_info,
            'image_url': relative_path  
        })

def get_additional_info(binomial_label):
    result = df[df['binomial'] == binomial_label]
    if result.empty:
        return None
    
    return {
        "Family": result['family'].values[0],
        "Genus": result['genus'].values[0],
        "Country": result['country'].values[1],
        "Poisonous":"Có độc" if result['poisonous'].values[0] else "Không có độc"
    }
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

