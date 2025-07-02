import { BrisaLogo } from '@/components';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const careerOpportunities = [
  {
    id: 1,
    title: "Brisa Yolculuğu",
    subtitle: "Eğitim ve Gelişim",
    description: "Sürekli öğrenme ve gelişim fırsatları",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Yetenek ve Performans Yönetimi",
    subtitle: "Bireysel Gelişim",
    description: "Kişisel yeteneklerinizi keşfedin ve geliştirin",
    icon: "📈"
  },
  {
    id: 3,
    title: "Tanıma ve Takdir",
    subtitle: "Başarı Ödülleri",
    description: "Başarılarınız takdir edilir ve ödüllendirilir",
    icon: "🏆"
  },
  {
    id: 4,
    title: "Gönüllülük",
    subtitle: "Sosyal Sorumluluk",
    description: "Topluma katkı sağlayacak projelerde yer alın",
    icon: "🤝"
  }
];

const workValues = [
  {
    title: "İş Yerinde Eşitlik ve Çeşitlilik",
    description: "Farklılıklarımızı güç olarak görüyoruz"
  },
  {
    title: "Çalışan Bağlılığı",
    description: "Takım ruhu ve güçlü bağlarla çalışıyoruz"
  },
  {
    title: "Brisa'da İşin Geleceği",
    description: "Teknoloji ve insanı bir araya getiriyoruz"
  }
];

export default function CareerScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch(err => console.error('URL açılamadı:', err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BrisaLogo width={120} height={32} />
        <ThemedText type="title" style={styles.headerText}>Kariyer</ThemedText>
      </View>

      <ThemedView style={styles.content}>
        {/* Hero Bölümü */}
        <View style={styles.heroSection}>
          <Image 
            source={require('@/assets/images/brisa-home-1.jpg')} 
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <ThemedText type="title" style={styles.heroTitle}>
              Brisalı Olmak
            </ThemedText>
            <ThemedText style={styles.heroSubtitle}>
              Geleceğin mobilitesini birlikte tasarlayanlar
            </ThemedText>
          </View>
        </View>

        {/* Brisalı Olmak Açıklama */}
        <View style={styles.descriptionSection}>
          <ThemedText style={styles.description}>
            Bir Brisalı, insan odaklı ve sürdürülebilir bir gelecek için çalışır. Her Brisalı, 
            yenilikçi bir bakış açısına sahiptir. Bizimle birlikte geleceğin mobilitesini 
            birlikte şekillendirmek istiyorsanız, aramıza katılın!
          </ThemedText>
        </View>

        {/* Brisa Yolculuğu */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Brisa Yolculuğu
          </ThemedText>
          <View style={styles.opportunitiesGrid}>
            {careerOpportunities.map((opportunity) => (
              <TouchableOpacity 
                key={opportunity.id} 
                style={styles.opportunityCard}
                onPress={() => openUrl('https://www.brisa.com.tr/brisali-olmak/')}
              >
                <View style={styles.opportunityIcon}>
                  <ThemedText style={styles.iconText}>{opportunity.icon}</ThemedText>
                </View>
                <ThemedText type="defaultSemiBold" style={styles.opportunityTitle}>
                  {opportunity.title}
                </ThemedText>
                <ThemedText style={styles.opportunitySubtitle}>
                  {opportunity.subtitle}
                </ThemedText>
                <ThemedText style={styles.opportunityDescription}>
                  {opportunity.description}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Çalışma Değerlerimiz */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Çalışma Değerlerimiz
          </ThemedText>
          {workValues.map((value, index) => (
            <View key={index} style={styles.valueCard}>
              <ThemedText type="defaultSemiBold" style={styles.valueTitle}>
                {value.title}
              </ThemedText>
              <ThemedText style={styles.valueDescription}>
                {value.description}
              </ThemedText>
            </View>
          ))}
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <ThemedText type="subtitle" style={styles.ctaTitle}>
            #seniniçin
          </ThemedText>
          <ThemedText style={styles.ctaDescription}>
            Brisa&apos;da geleceğin mobilitesini şekillendiren takımın bir parçası ol!
          </ThemedText>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => openUrl('https://www.brisa.com.tr/brisali-olmak/potansiyel-brisalilar/')}
          >
            <ThemedText style={styles.buttonText}>
              Potansiyel Brisalılar
            </ThemedText>
          </TouchableOpacity>
        </View>
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
  headerText: {
    color: 'white',
    marginBottom: 8,
  },
  content: {
    padding: 16,
  },
  heroSection: {
    position: 'relative',
    height: 200,
    marginBottom: 32,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
  },
  descriptionSection: {
    marginBottom: 32,
  },
  description: {
    color: '#333',
    fontSize: 16,
    lineHeight: 22,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
    color: '#333',
  },
  opportunitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  opportunityCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  opportunityIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 24,
  },
  opportunityTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  opportunitySubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  opportunityDescription: {
    fontSize: 12,
    color: '#888',
    lineHeight: 16,
  },
  valueCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#9C27B0',
  },
  valueTitle: {
    marginBottom: 8,
  },
  valueDescription: {
    color: '#666',
    lineHeight: 20,
  },
  ctaSection: {
    backgroundColor: '#011689',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 32,
  },
  ctaTitle: {
    color: 'white',
    marginBottom: 8,
  },
  ctaDescription: {
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 20,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 