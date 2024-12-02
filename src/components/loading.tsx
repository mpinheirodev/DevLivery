import { ActivityIndicator } from "react-native"

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-zinc-900 items-center justify-center text-indigo-600" />
  )
}