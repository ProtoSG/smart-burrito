import { Text, View } from 'react-native';
import { StatusService } from './StatusService';
import { TourHistory } from './TourHistory';
import { MapContainer } from './MapContainer';


type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className="text-3xl text-white text-center py-8 font-bold">{title}</Text>
      <StatusService />
      <MapContainer />
      <TourHistory />
      {children}
    </View>
  );
};

const styles = {
  container: `flex-1  bg-[#323232] `,
};
