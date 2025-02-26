import { View } from "react-native";
import { Tour } from "types/tour.type";
import { NewText } from "./NewText";

interface Props {
  tour: Tour
}

export function TourCard({ tour }: Props) {
  return (
    <View className="flex-row justify-between items-center px-4 py-6">
      <NewText>{tour.description}</NewText>
      <View className="items-center">
        <NewText>{tour.time}</NewText>
        <NewText className="text-sm">{tour.date}</NewText>
      </View>
    </View>
  )
}
