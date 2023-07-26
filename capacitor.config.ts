import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'PlantCareApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      cameraUsage: 'required',
      saveToGallery: true
    },
    Filesystem: {}
  }
};

export default config;
