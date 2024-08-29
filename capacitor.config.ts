import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourapp.id',
  appName: 'Wallet-State',
  webDir: 'dist/wallet-state/browser',
  bundledWebRuntime: false // or true, depending on your setup
};


export default config;
