import { AlertIcon } from "assets/alertIcon";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export function StatusService() {
  const [status, setStatus] = useState<boolean>(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      setStatus(true)
    }, 5000)

    return () => clearTimeout(delay)
  }, [])

  return (
    <View className={`text-white flex-row py-4 gap-4 w-full ${status ? "bg-green-400/40" : "bg-red-400/40"} items-center justify-center transition-colors`}>
      <AlertIcon color={status ? "white" : "red"} />
      <Text className={`${status ? "text-white" : "text-red-300"} transition-colors text-xl font-semibold`}>{status ? "En servicio" : "Fuera de servicio"}</Text>
    </View>
  )
}
