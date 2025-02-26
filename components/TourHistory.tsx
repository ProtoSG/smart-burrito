import { HistoryIcon } from "assets/HistoryIcon";
import { FlatList, View } from "react-native";
import { NewText } from "./NewText";
import { Tour } from "types/tour.type";
import { TourCard } from "./TourCard";

const tours: Tour[] = [
  {
    description: "Primera vuelta",
    time: "6:00 am",
    date: "20 de febrero"
  },
  {
    description: "Segunda vuelta",
    time: "6:15 am",
    date: "20 de febrero"
  },
  {
    description: "Tercera vuelta",
    time: "6:30 am",
    date: "20 de febrero"
  },
  {
    description: "Cuarta vuelta",
    time: "6:45 am",
    date: "20 de febrero"
  },
]

export function TourHistory() {
  return (
    <View className="">
      <View className="flex-row gap-4 items-center bg-zinc-600 py-4 px-2">
        <HistoryIcon color={'white'} />
        <NewText className="text-2xl">Historial de recorrido</NewText>
      </View>
      <FlatList
        className="max-h-64"
        data={tours}
        keyExtractor={(tour) => tour.time + tour.date}
        renderItem={({ item }) => <TourCard tour={item} />}
      />

    </View>
  )
}
