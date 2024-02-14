import { View, ActivityIndicator } from "react-native";
// importa as cores do tailwind para serem utilizadas como props ao invés
// de classes
import colors from 'tailwindcss/colors';

// DEIXAR COMO DEFAULT APENAS OS ARQUIVOS QUE SERÃO UTILIZADOS PELO
// EXPO ROUTER
export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      {/* Componente que mostra um carregamento */}
      <ActivityIndicator className={colors.white} />
    </View>
  )
}
