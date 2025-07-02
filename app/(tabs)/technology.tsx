import { ScrollView, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const technologySections = [
  {
    id: 1,
    title: "AR-GE Merkezi",
    description: "Akıllı fabrikamızda yer alan AR-GE merkezimiz, geleceğin lastik teknolojilerini geliştiriyor.",
    icon: "🔬",
    color: "#0066CC"
  },
  {
    id: 2,
    title: "Akıllı Üretim",
    description: "İleri teknoloji ve dijital dönüşümle desteklenen üretim süreçlerimiz, kalite ve verimliliği artırıyor.",
    icon: "🏭",
    color: "#FF6B35"
  },
  {
    id: 3,
    title: "Mobilite Çözümleri",
    description: "Geleceğin mobilite ihtiyaçları için yenilikçi çözümler ve teknolojiler geliştiriyoruz.",
    icon: "🚗",
    color: "#4CAF50"
  },
  {
    id: 4,
    title: "Dijitalleşme Yolculuğumuz",
    description: "Dijital teknolojilerle iş süreçlerimizi optimize ediyor, müşteri deneyimini iyileştiriyoruz.",
    icon: "💻",
    color: "#9C27B0"
  },
  {
    id: 5,
    title: "Girişimcilik",
    description: "Startup ekosistemi ile iş birliği yaparak yenilikçi projeleri destekliyoruz.",
    icon: "🚀",
    color: "#FF9800"
  },
  {
    id: 6,
    title: "Lastik Deney Laboratuvarı",
    description: "Uluslararası standartlarda test ve kalite kontrol imkanları sunuyoruz.",
    icon: "🧪",
    color: "#607D8B"
  }
];

const innovations = [
  {
    id: 1,
    title: "Bridgestone ENLITEN Teknolojisi",
    description: "Daha hafif, daha dayanıklı ve daha az yakıt tüketen lastikler için devrim niteliğinde teknoloji.",
    features: ["Ağırlık azaltma", "Dayanıklılık artışı", "Yakıt tasarrufu"]
  },
  {
    id: 2,
    title: "Akıllı Sensör Teknolojisi",
    description: "Lastik basıncı ve sıcaklık takibi ile güvenli sürüş desteği.",
    features: ["Gerçek zamanlı monitoring", "Güvenlik uyarıları", "Performans optimizasyonu"]
  },
  {
    id: 3,
    title: "Sürdürülebilir Malzemeler",
    description: "Çevre dostu üretim için yenilenebilir ve geri dönüştürülebilir malzeme kullanımı.",
    features: ["Doğal kauçuk", "Geri dönüştürülmüş malzemeler", "Bio-based çözümler"]
  }
];

export default function TechnologyScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch(err => console.error('URL açılamadı:', err));
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Teknoloji ve Yenilikçilik
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Geleceğin Mobilite Teknolojilerini Şekillendiriyoruz
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        {/* Intro Section */}
        <View style={styles.introSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Yenilikçi Yaklaşımımız
          </ThemedText>
          <ThemedText style={styles.introText}>
            AR-GE merkezimizdeki tasarım ve geliştirme çalışmaları, dijitalleşmede hız kazanan 
            yolculuğumuz ve girişimcilerle ortak yürüttüğümüz çalışmalarla sadece lastik 
            sektöründe değil, yenilikte de lider olmayı hedefliyoruz.
          </ThemedText>
        </View>

        {/* Teknoloji Alanları */}
        <View style={styles.sectionsContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Teknoloji Alanlarımız
          </ThemedText>
          {technologySections.map((section) => (
            <TouchableOpacity 
              key={section.id} 
              style={styles.technologyCard}
              onPress={() => openUrl('https://www.brisa.com.tr/')}
            >
              <View style={[styles.techIcon, { backgroundColor: section.color + '20' }]}>
                <ThemedText style={styles.iconText}>{section.icon}</ThemedText>
              </View>
              <View style={styles.techContent}>
                <ThemedText type="defaultSemiBold" style={styles.techTitle}>
                  {section.title}
                </ThemedText>
                <ThemedText style={styles.techDescription}>
                  {section.description}
                </ThemedText>
              </View>
              <View style={styles.techIndicator}>
                <View style={[styles.colorIndicator, { backgroundColor: section.color }]} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Yeniliklerimiz */}
        <View style={styles.innovationsContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Öne Çıkan Yeniliklerimiz
          </ThemedText>
          {innovations.map((innovation) => (
            <TouchableOpacity 
              key={innovation.id} 
              style={styles.innovationCard}
              onPress={() => openUrl('https://www.brisa.com.tr/')}
            >
              <ThemedText type="defaultSemiBold" style={styles.innovationTitle}>
                {innovation.title}
              </ThemedText>
              <ThemedText style={styles.innovationDescription}>
                {innovation.description}
              </ThemedText>
              <View style={styles.featuresContainer}>
                {innovation.features.map((feature, index) => (
                  <View key={index} style={styles.featureTag}>
                    <ThemedText style={styles.featureText}>{feature}</ThemedText>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* AR-GE Butonu */}
        <TouchableOpacity 
          style={styles.rdButton}
          onPress={() => openUrl('https://www.brisa.com.tr/')}
        >
          <ThemedText style={styles.rdButtonText}>
            AR-GE Merkezimizi Keşfet
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
  introSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 16,
    color: '#0066CC',
  },
  introText: {
    lineHeight: 22,
    color: '#333',
  },
  sectionsContainer: {
    marginBottom: 20,
  },
  technologyCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  techIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 28,
  },
  techContent: {
    flex: 1,
  },
  techTitle: {
    marginBottom: 6,
    color: '#333',
    fontSize: 16,
  },
  techDescription: {
    color: '#666',
    fontSize: 14,
    lineHeight: 18,
  },
  techIndicator: {
    paddingLeft: 12,
  },
  colorIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
  },
  innovationsContainer: {
    marginBottom: 20,
  },
  innovationCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopWidth: 3,
    borderTopColor: '#0066CC',
  },
  innovationTitle: {
    marginBottom: 8,
    color: '#333',
    fontSize: 16,
  },
  innovationDescription: {
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  featureTag: {
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#0066CC',
  },
  featureText: {
    color: '#0066CC',
    fontSize: 12,
    fontWeight: '500',
  },
  rdButton: {
    backgroundColor: '#0066CC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  rdButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 