import { useState } from "react";
import { View, FlatList, SectionList, Text } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";
import { CATEGORIES, MENU } from "@/utils/data/products";

export default function Home() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  const handleCategorySelected = (item: string) => {
    setCategory(item);
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={7} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelected(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        sections={MENU}
        // ele considera automaticamente esse "item" como cada campo "data" do
        // objeto principal do array
        // TODAS AS POSIÇÕES PRECISAM TER A MESMA TIPAGEM?
        keyExtractor={(item) => item.id}
        // Garantir uma visualização melhor, onde a lista não se estica e nem
        // fica em cima de outros produtos
        stickySectionHeadersEnabled={false}
        // Informação que irei renderizar
        renderItem={({ item }) => <Text>{item.title}</Text>}
        // header da seção?? (ver documentação)
        // exibe o title, a categoria da sessão
        // isso ocorre por que essa lista é específica dessa forma
        // separando cada posição do objeto principal do array como uma session
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
    </View>
  );
}
