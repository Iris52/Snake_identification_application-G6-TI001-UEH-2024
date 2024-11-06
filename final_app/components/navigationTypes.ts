import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation params for each screen in the stack
export type RootStackParamList = {
  Cam: undefined;
  TmKimThngTin1: { 
    binomial_predictions: string; 
    additionalInfo: { 
      Family?: string; 
      Genus?: string; 
      Country?: string; 
      Poisonous?: boolean 
    };
    imageUrl: string;
  };
};

// Rename the navigation prop type to avoid conflict
export type CamNavigationProp = StackNavigationProp<RootStackParamList, 'Cam'>;
