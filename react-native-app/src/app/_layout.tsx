// Faz com que a tela fique apenas na área que não envolve detalhes nativos
// do dispotitivo
import { SafeAreaView } from "react-native";
// Exibe todas as rotas
import { Slot } from "expo-router";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter'

export default function Layout() {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  );
}
