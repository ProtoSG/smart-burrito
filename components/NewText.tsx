import { Text } from "react-native";

interface Props {
  className?: string
  children: React.ReactNode
}

export function NewText({ className, children }: Props) {
  return (
    <Text className={`text-white ${className}`}>
      {children}
    </Text>
  )
}
