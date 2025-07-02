import { BrisaLogo } from '@/components';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const newsData = [
  {
    id: 1,
    title: "Brisa'dan Araç Üreticilerine Güçlü Kalite Taahhüdü",
    date: "23.06.2025",
    summary: "Brisa, araç üreticilerine yönelik kalite standartlarını artırarak sektördeki liderliğini pekiştiriyor.",
    image: require('@/assets/images/brisa-home-1.jpg')
  },
  {
    id: 2,
    title: "Bridgestone ENLITEN Teknolojisi Geleceğin Mobilitesine Yön Veriyor",
    date: "18.06.2025",
    summary: "Yeni ENLITEN teknolojisi ile sürdürülebilir mobilite çözümlerinde öncü olmaya devam ediyoruz.",
    image: require('@/assets/images/tarihce-box.jpg')
  },
  {
    id: 3,
    title: "Lassa'dan Yeni 5 Yıl Garanti Kampanyası İçin Reklam Filmi",
    date: "02.06.2025",
    summary: "'Aşkın Garantisi Yok Ama Lassa'nın Var!' sloganıyla müşterilerine 5 yıl garanti avantajı sunuyor.",
    image: require('@/assets/images/react-logo.png')
  },
  {
    id: 4,
    title: "Brisa ve Çiftay'dan Güçlü İş Birliği",
    date: "28.05.2025",
    summary: "Brisa, 1.150 araçlık filo için uçtan uca mobilite çözümleri sunacak.",
    image: require('@/assets/images/icon.png')
  },
  {
    id: 5,
    title: "Brisaspor Bisiklet Takımı'ndan Ankara ve Bursa'da Madalya Yağmuru",
    date: "13.05.2025",
    summary: "Brisaspor bisiklet takımı yarışlarda üstün başarı gösterdi.",
    image: require('@/assets/images/adaptive-icon.png')
  },
  {
    id: 6,
    title: "Brisa, ilk çeyrek finansal sonuçlarını açıkladı",
    date: "01.05.2025",
    summary: "Pazarın ihtiyaçlarına yönelik yenilikçi ürünleriyle gücünü pekiştirdi.",
    image: require('@/assets/images/splash-icon.png')
  },
  {
    id: 7,
    title: "Enerjisa Enerji ve Brisa'dan 4,8 MW'lık dev ısı pompası",
    date: "29.04.2025",
    summary: "Enerji verimliliğinde güçlü adım atıldı.",
    image: require('@/assets/images/favicon.png')
  },
  {
    id: 8,
    title: "Ford Trucks F-LINE, Bridgestone lastikleriyle yola çıkıyor",
    date: "28.04.2025",
    summary: "Ford Trucks F-LINE serisi araçlar Bridgestone lastikleriyle donatılıyor.",
    image: require('@/assets/images/partial-react-logo.png')
  },
  {
    id: 9,
    title: "Bridgestone Enliten Teknolojisinin 'en'lerini yeni reklam filminde anlatıyor",
    date: "22.04.2025",
    summary: "Enliten teknolojisinin avantajları yeni reklam kampanyasıyla anlatılıyor.",
    image: require('@/assets/images/brisa-home-1.jpg')
  }
];

export default function NewsScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch(err => console.error('URL açılamadı:', err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BrisaLogo width={120} height={32} />
      </View>

      <ThemedView style={styles.headerSection}>
        <ThemedText type="title" style={styles.headerTitle}>
          Haberler
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Brisa&apos;dan son haberler ve gelişmeler
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        {newsData.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.newsCard}
            onPress={() => Linking.openURL('https://www.brisa.com.tr/')}
          >
            <Image 
              source={item.image} 
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsContent}>
              <View style={styles.newsHeader}>
                <Text style={styles.newsDate}>{item.date}</Text>
              </View>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsSummary}>{item.summary}</Text>
              <Text style={styles.readMore}>Devamını Oku →</Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity 
          style={styles.allNewsButton}
          onPress={() => openUrl('https://www.brisa.com.tr/')}
        >
          <ThemedText style={styles.allNewsText}>
            Tüm Haberleri Görüntüle
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
    padding: 16,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerSection: {
    padding: 20,
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
  newsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#0066CC',
  },
  newsHeader: {
    marginBottom: 8,
  },
  newsDate: {
    color: '#666',
    fontSize: 12,
    fontWeight: '500',
  },
  newsTitle: {
    marginBottom: 8,
    lineHeight: 22,
  },
  newsSummary: {
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  readMore: {
    alignItems: 'flex-end',
  },
  allNewsButton: {
    backgroundColor: '#0066CC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  allNewsText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  newsContent: {
    flex: 1,
  },
});
