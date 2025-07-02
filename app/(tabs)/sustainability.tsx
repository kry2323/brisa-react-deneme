import { ScrollView, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const sustainabilityAreas = [
  {
    id: 1,
    title: "İklim Geçiş Planı",
    description: "2050 yılına kadar net sıfır karbon emisyonu hedefimize ulaşmak için kapsamlı eylem planımız.",
    icon: "🌍",
    color: "#4CAF50"
  },
  {
    id: 2,
    title: "Çevre Yaklaşımı",
    description: "Üretim süreçlerimizde çevre koruma ve kaynak verimliliği önceliğimiz.",
    icon: "🌱",
    color: "#2E7D32"
  },
  {
    id: 3,
    title: "Su Güvenliği",
    description: "Su kaynaklarının korunması ve sürdürülebilir kullanımı için öncü projelerimiz.",
    icon: "💧",
    color: "#2196F3"
  },
  {
    id: 4,
    title: "Geri Dönüşüm",
    description: "Döngüsel ekonomi modeli ile atık yönetimi ve geri dönüşüm çalışmalarımız.",
    icon: "♻️",
    color: "#FF9800"
  },
  {
    id: 5,
    title: "Yenilenebilir Enerji",
    description: "Üretim tesislerimizde yenilenebilir enerji kaynaklarına geçiş projelerimiz.",
    icon: "⚡",
    color: "#FFC107"
  },
  {
    id: 6,
    title: "Sosyal Sorumluluk",
    description: "Toplumsal kalkınma ve sosyal değer yaratma projelerimizle fark yaratıyoruz.",
    icon: "🤝",
    color: "#9C27B0"
  }
];

const sustainabilityGoals = [
  {
    title: "Net Sıfır Karbon",
    target: "2050",
    progress: "45%",
    description: "Karbon nötr üretim hedefimize doğru",
    color: "#4CAF50"
  },
  {
    title: "Su Tasarrufu",
    target: "%30",
    progress: "62%",
    description: "2030 yılına kadar su kullanımında azalma",
    color: "#2196F3"
  },
  {
    title: "Geri Dönüşüm",
    target: "%85",
    progress: "73%",
    description: "Üretim atıklarının geri dönüşüm oranı",
    color: "#FF9800"
  },
  {
    title: "Yenilenebilir Enerji",
    target: "%60",
    progress: "38%",
    description: "Toplam enerji tüketiminde yenilenebilir pay",
    color: "#FFC107"
  }
];

const reports = [
  {
    title: "2024 Sürdürülebilirlik Raporu",
    year: "2024",
    type: "Annual Report"
  },
  {
    title: "İklim Geçiş Planı",
    year: "2024",
    type: "Climate Plan"
  },
  {
    title: "ESG Performans Raporu",
    year: "2024",
    type: "ESG Report"
  }
];

const awards = [
  {
    title: "Global İklim Değişikliği Lideri",
    organization: "CDP",
    year: "2024"
  },
  {
    title: "Türkiye Su Güvenliği Lideri",
    organization: "CDP Water",
    year: "2024"
  },
  {
    title: "Sürdürülebilirlik Ödülü",
    organization: "BIST",
    year: "2023"
  }
];

export default function SustainabilityScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url).catch(err => console.error('URL açılamadı:', err));
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Sürdürülebilirlik
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          İşimizin Merkezinde Sürdürülebilir Gelecek
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        {/* Intro Section */}
        <View style={styles.introSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Sürdürülebilirlik Yaklaşımımız
          </ThemedText>
          <ThemedText style={styles.introText}>
            Global İklim Değişikliği Lideri ve Türkiye Su Güvenliği Lideri olarak, 
            çevresel, sosyal ve yönetim sorumluluklarımızı en üst seviyede yerine getiriyoruz.
          </ThemedText>
        </View>

        {/* Sürdürülebilirlik Hedeflerimiz */}
        <View style={styles.goalsSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            2030 Sürdürülebilirlik Hedeflerimiz
          </ThemedText>
          <View style={styles.goalsGrid}>
            {sustainabilityGoals.map((goal, index) => (
              <View key={index} style={[styles.goalCard, { borderTopColor: goal.color }]}>
                <View style={styles.goalHeader}>
                  <ThemedText style={styles.goalTarget}>{goal.target}</ThemedText>
                  <View style={styles.progressContainer}>
                    <View style={[styles.progressBar, { backgroundColor: goal.color + '30' }]}>
                                             <View 
                         style={[
                           styles.progressFill, 
                           { 
                             backgroundColor: goal.color,
                             width: `${parseInt(goal.progress)}%`
                           }
                         ]} 
                       />
                    </View>
                    <ThemedText style={styles.progressText}>{goal.progress}</ThemedText>
                  </View>
                </View>
                <ThemedText type="defaultSemiBold" style={styles.goalTitle}>
                  {goal.title}
                </ThemedText>
                <ThemedText style={styles.goalDescription}>
                  {goal.description}
                </ThemedText>
              </View>
            ))}
          </View>
        </View>

        {/* Sürdürülebilirlik Alanları */}
        <View style={styles.areasSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Odak Alanlarımız
          </ThemedText>
          {sustainabilityAreas.map((area) => (
            <TouchableOpacity 
              key={area.id} 
              style={styles.areaCard}
              onPress={() => openUrl('https://www.brisa.com.tr/')}
            >
              <View style={[styles.areaIcon, { backgroundColor: area.color + '20' }]}>
                <ThemedText style={styles.iconText}>{area.icon}</ThemedText>
              </View>
              <View style={styles.areaContent}>
                <ThemedText type="defaultSemiBold" style={styles.areaTitle}>
                  {area.title}
                </ThemedText>
                <ThemedText style={styles.areaDescription}>
                  {area.description}
                </ThemedText>
              </View>
              <View style={styles.areaIndicator}>
                <View style={[styles.colorDot, { backgroundColor: area.color }]} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Ödüller */}
        <View style={styles.awardsSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Uluslararası Başarılarımız
          </ThemedText>
          {awards.map((award, index) => (
            <View key={index} style={styles.awardCard}>
              <View style={styles.awardIcon}>
                <ThemedText style={styles.iconText}>🏆</ThemedText>
              </View>
              <View style={styles.awardContent}>
                <ThemedText type="defaultSemiBold" style={styles.awardTitle}>
                  {award.title}
                </ThemedText>
                <ThemedText style={styles.awardOrg}>
                  {award.organization} • {award.year}
                </ThemedText>
              </View>
            </View>
          ))}
        </View>

        {/* Raporlar */}
        <View style={styles.reportsSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Sürdürülebilirlik Raporlarımız
          </ThemedText>
          {reports.map((report, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.reportCard}
              onPress={() => openUrl('https://www.brisa.com.tr/')}
            >
              <View style={styles.reportInfo}>
                <ThemedText type="defaultSemiBold" style={styles.reportTitle}>
                  {report.title}
                </ThemedText>
                <ThemedText style={styles.reportMeta}>
                  {report.type} • {report.year}
                </ThemedText>
              </View>
              <View style={styles.downloadIcon}>
                <ThemedText style={styles.downloadText}>📄</ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Turnalar Hep Uçsun */}
        <TouchableOpacity 
          style={styles.turnaButton}
          onPress={() => openUrl('https://www.brisa.com.tr/')}
        >
          <ThemedText style={styles.turnaText}>
            🕊️ Turnalar Hep Uçsun Projesi
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
    backgroundColor: '#4CAF50',
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
    color: '#4CAF50',
  },
  introText: {
    lineHeight: 22,
    color: '#333',
  },
  goalsSection: {
    marginBottom: 24,
  },
  goalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  goalCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopWidth: 3,
  },
  goalHeader: {
    alignItems: 'center',
    marginBottom: 12,
  },
  goalTarget: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 6,
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  goalTitle: {
    marginBottom: 6,
    color: '#333',
    textAlign: 'center',
    fontSize: 14,
  },
  goalDescription: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  areasSection: {
    marginBottom: 24,
  },
  areaCard: {
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
  areaIcon: {
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
  areaContent: {
    flex: 1,
  },
  areaTitle: {
    marginBottom: 6,
    color: '#333',
    fontSize: 16,
  },
  areaDescription: {
    color: '#666',
    fontSize: 14,
    lineHeight: 18,
  },
  areaIndicator: {
    paddingLeft: 12,
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  awardsSection: {
    marginBottom: 24,
  },
  awardCard: {
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
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  awardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff8e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  awardContent: {
    flex: 1,
  },
  awardTitle: {
    marginBottom: 4,
    color: '#333',
  },
  awardOrg: {
    color: '#666',
    fontSize: 14,
  },
  reportsSection: {
    marginBottom: 24,
  },
  reportCard: {
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
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    marginBottom: 4,
    color: '#333',
  },
  reportMeta: {
    color: '#666',
    fontSize: 14,
  },
  downloadIcon: {
    paddingLeft: 12,
  },
  downloadText: {
    fontSize: 24,
  },
  turnaButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  turnaText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 