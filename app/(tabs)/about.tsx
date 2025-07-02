import { ScrollView, StyleSheet, View, TouchableOpacity, Linking, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const aboutSections = [
  {
    id: 1,
    title: "Biz Kimiz?",
    description: "Türkiye lastik sektörünün mobilite lideri olarak, müşterilerimize güvenli ve yenilikçi çözümler sunuyoruz.",
    icon: "🏢"
  },
  {
    id: 2,
    title: "Tarihçe",
    description: "1974 yılından bu yana Türkiye&apos;nin lastik sektöründe öncü olan Brisa, sürekli büyüyen bir başarı hikayesi yazmaktadır.",
    icon: "📅"
  },
  {
    id: 3,
    title: "CEO Mesajı",
    description: "Geleceğin mobilite ihtiyaçlarını karşılamak için sürdürülebilir ve yenilikçi çözümler üretmeye devam ediyoruz.",
    icon: "👨‍💼"
  },
  {
    id: 4,
    title: "Ödüller",
    description: "Kalite, inovasyon ve sürdürülebilirlik alanlarında aldığımız çok sayıda ulusal ve uluslararası ödül.",
    icon: "🏆"
  },
  {
    id: 5,
    title: "Brisa Akademi",
    description: "Çalışanlarımızın gelişimi için sürekli eğitim ve öğrenme imkanları sunuyoruz.",
    icon: "🎓"
  },
  {
    id: 6,
    title: "Etik İlkeler",
    description: "İş etiği ve kurumsal yönetim ilkelerimizle şeffaf ve hesap verebilir bir yönetim anlayışı benimemsiyoruz.",
    icon: "⚖️"
  }
];

const productsAndServices = [
  {
    id: 1,
    title: "Lastik Markalarımız",
    description: "Bridgestone, Lassa ve diğer premium lastik markaları",
    color: "#0066CC"
  },
  {
    id: 2,
    title: "Hızlı Bakım Servis Zincirlerimiz",
    description: "QuickLane ve BridgePoint hizmet noktaları",
    color: "#FF6B35"
  },
  {
    id: 3,
    title: "Filo Hizmetlerimiz",
    description: "Kurumsal müşterilerimiz için özel çözümler",
    color: "#4CAF50"
  }
];

export default function AboutScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch(err => console.error('URL açılamadı:', err));
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Hakkımızda
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Türkiye Lastik Sektörünün Mobilite Lideri
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        {/* Şirket Tanıtımı */}
        <View style={styles.introSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Cesaretle Yol Alırız!
          </ThemedText>
          <ThemedText style={styles.introText}>
            1974 yılından bu yana Türkiye&apos;nin lastik sektörünün öncüsü olan Brisa, bugün sadece bir 
            lastik üreticisi değil, mobilite çözümleri sunan bir teknoloji şirketi konumundadır.
          </ThemedText>
        </View>

        {/* Hakkımızda Bölümleri */}
        <View style={styles.sectionsContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Kurumsal
          </ThemedText>
          {aboutSections.map((section) => (
            <TouchableOpacity 
              key={section.id} 
              style={styles.sectionCard}
              onPress={() => openUrl('https://www.brisa.com.tr/')}
            >
              <View style={styles.sectionIcon}>
                <ThemedText style={styles.iconText}>{section.icon}</ThemedText>
              </View>
              <View style={styles.sectionContent}>
                <ThemedText type="defaultSemiBold" style={styles.sectionCardTitle}>
                  {section.title}
                </ThemedText>
                <ThemedText style={styles.sectionDescription}>
                  {section.description}
                </ThemedText>
              </View>
              <View style={styles.arrow}>
                <ThemedText style={styles.arrowText}>→</ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Ürün ve Hizmetler */}
        <View style={styles.productsContainer}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Ürün ve Hizmetlerimiz
          </ThemedText>
          {productsAndServices.map((product) => (
            <TouchableOpacity 
              key={product.id} 
              style={[styles.productCard, { borderLeftColor: product.color }]}
              onPress={() => openUrl('https://www.brisa.com.tr/')}
            >
              <ThemedText type="defaultSemiBold" style={styles.productTitle}>
                {product.title}
              </ThemedText>
              <ThemedText style={styles.productDescription}>
                {product.description}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Web Sitesi Linki */}
        <TouchableOpacity 
          style={styles.websiteButton}
          onPress={() => openUrl('https://www.brisa.com.tr/')}
        >
          <ThemedText style={styles.websiteButtonText}>
            Daha Fazla Bilgi İçin Web Sitemizi Ziyaret Edin
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
  sectionCard: {
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
  sectionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 24,
  },
  sectionContent: {
    flex: 1,
  },
  sectionCardTitle: {
    marginBottom: 4,
    color: '#333',
  },
  sectionDescription: {
    color: '#666',
    fontSize: 14,
    lineHeight: 18,
  },
  arrow: {
    paddingLeft: 8,
  },
  arrowText: {
    color: '#0066CC',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productsContainer: {
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productTitle: {
    marginBottom: 8,
    color: '#333',
  },
  productDescription: {
    color: '#666',
    lineHeight: 18,
  },
  websiteButton: {
    backgroundColor: '#0066CC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  websiteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 