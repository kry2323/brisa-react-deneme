import { ScrollView, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const investorSections = [
  {
    id: 1,
    title: "Kurumsal",
    items: [
      { name: "Şirket Bilgileri", icon: "🏢" },
      { name: "Ortaklık Yapısı", icon: "📊" },
      { name: "CFO Mesajı", icon: "💼" },
      { name: "KAP Açıklamaları", icon: "📄" },
      { name: "Yatırımcı İlişkileri İletişim", icon: "📞" }
    ]
  },
  {
    id: 2,
    title: "Sunumlar ve Raporlar",
    items: [
      { name: "Yatırımcı Sunumları", icon: "📋" },
      { name: "Faaliyet Raporları", icon: "📈" },
      { name: "Finansal Tablolar", icon: "💰" },
      { name: "Özet Finansallar", icon: "📊" },
      { name: "Finansal Bilgilendirme Bülteni", icon: "📰" }
    ]
  },
  {
    id: 3,
    title: "Yatırımcı Araçları",
    items: [
      { name: "Hisse Fiyatı", icon: "📈" },
      { name: "Temettü Ödemeleri", icon: "💵" },
      { name: "Analist Listesi", icon: "👥" },
      { name: "Yatırımcı Takvimi", icon: "📅" }
    ]
  }
];

const financialHighlights = [
  {
    title: "Net Satış",
    value: "2.8 Milyar TL",
    change: "+15.2%",
    positive: true
  },
  {
    title: "EBITDA",
    value: "485 Milyon TL",
    change: "+22.8%",
    positive: true
  },
  {
    title: "Net Kar",
    value: "312 Milyon TL",
    change: "+18.5%",
    positive: true
  },
  {
    title: "Özkaynak Karlılığı",
    value: "%24.3",
    change: "+3.1pp",
    positive: true
  }
];

const esgHighlights = [
  {
    title: "Sürdürülebilirlik Raporları",
    description: "Çevresel, sosyal ve yönetim performansımızı şeffaflıkla paylaşıyoruz.",
    icon: "🌱"
  },
  {
    title: "İklim Geçiş Planı",
    description: "Net sıfır karbon hedefimize ulaşmak için somut adımlar atıyoruz.",
    icon: "🌍"
  },
  {
    title: "Kurumsal Yönetim",
    description: "En yüksek yönetim standartlarıyla şeffaf ve etik iş yapış tarzımız.",
    icon: "⚖️"
  }
];

export default function InvestorScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch(err => console.error('URL açılamadı:', err));
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Yatırımcı İlişkileri
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Güçlü Finansal Performans ve Sürdürülebilir Büyüme
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        {/* Finansal Öne Çıkanlar */}
        <View style={styles.financialSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Finansal Öne Çıkanlar (Son Çeyrek)
          </ThemedText>
          <View style={styles.financialGrid}>
            {financialHighlights.map((item, index) => (
              <View key={index} style={styles.financialCard}>
                <ThemedText style={styles.financialValue}>{item.value}</ThemedText>
                <ThemedText style={styles.financialTitle}>{item.title}</ThemedText>
                <View style={styles.changeContainer}>
                  <ThemedText style={[
                    styles.changeText, 
                    { color: item.positive ? '#4CAF50' : '#F44336' }
                  ]}>
                    {item.change}
                  </ThemedText>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Yatırımcı Bölümleri */}
        {investorSections.map((section) => (
          <View key={section.id} style={styles.sectionContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              {section.title}
            </ThemedText>
            <View style={styles.itemsGrid}>
              {section.items.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.itemCard}
                  onPress={() => openUrl('https://www.brisa.com.tr/')}
                >
                  <View style={styles.itemIcon}>
                    <ThemedText style={styles.iconText}>{item.icon}</ThemedText>
                  </View>
                  <ThemedText style={styles.itemText}>{item.name}</ThemedText>
                  <View style={styles.itemArrow}>
                    <ThemedText style={styles.arrowText}>→</ThemedText>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* ESG Bölümü */}
        <View style={styles.esgSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            ESG (Çevresel, Sosyal ve Yönetim)
          </ThemedText>
          {esgHighlights.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.esgCard}
              onPress={() => openUrl('https://www.brisa.com.tr/')}
            >
              <View style={styles.esgIcon}>
                <ThemedText style={styles.iconText}>{item.icon}</ThemedText>
              </View>
              <View style={styles.esgContent}>
                <ThemedText type="defaultSemiBold" style={styles.esgTitle}>
                  {item.title}
                </ThemedText>
                <ThemedText style={styles.esgDescription}>
                  {item.description}
                </ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Yatırımcı Kiti Butonu */}
        <TouchableOpacity 
          style={styles.investorKitButton}
          onPress={() => openUrl('https://www.brisa.com.tr/')}
        >
          <ThemedText style={styles.buttonText}>
            Yatırımcı Kitini İndir
          </ThemedText>
        </TouchableOpacity>

        {/* KAP Butonu */}
        <TouchableOpacity 
          style={styles.kapButton}
          onPress={() => openUrl('https://www.kap.org.tr/')}
        >
          <ThemedText style={styles.buttonText}>
            KAP Açıklamalarını Görüntüle
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#0066CC',
  },
  headerTitle: {
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    color: 'white',
    opacity: 0.9,
    fontSize: 16,
  },
  content: {
    padding: 16,
  },
  financialSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    color: '#0066CC',
  },
  financialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  financialCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopWidth: 3,
    borderTopColor: '#0066CC',
  },
  financialValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 4,
  },
  financialTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  changeContainer: {
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  changeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  itemsGrid: {
    gap: 8,
  },
  itemCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  itemText: {
    flex: 1,
    color: '#333',
    fontSize: 14,
  },
  itemArrow: {
    paddingLeft: 8,
  },
  arrowText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  esgSection: {
    marginBottom: 24,
  },
  esgCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  esgIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0fff0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  esgContent: {
    flex: 1,
  },
  esgTitle: {
    marginBottom: 6,
    color: '#333',
  },
  esgDescription: {
    color: '#666',
    fontSize: 14,
    lineHeight: 18,
  },
  investorKitButton: {
    backgroundColor: '#0066CC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  kapButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 