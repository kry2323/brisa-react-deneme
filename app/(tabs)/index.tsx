import { BrisaLogo } from '@/components';
import { ThemedText } from '@/components/ThemedText';
import { heroSlides, newsData } from '@/constants/AppData';
import { utils } from '@/constants/Utilities';
import { useEffect, useState } from 'react';
import { Dimensions, Image, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const TOTAL_SLIDES = 5; // heroSlides.length yerine sabit değer

export default function HomeScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for web
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % TOTAL_SLIDES);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    const next = (currentSlide + 1) % TOTAL_SLIDES;
    setCurrentSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide === 0 ? TOTAL_SLIDES - 1 : currentSlide - 1;
    setCurrentSlide(prev);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };



  const openUrl = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={[styles.container, { backgroundColor: 'white' }]}>
        {/* Hero Slider - ScrollView with Paging */}
        <View style={styles.heroContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
              setCurrentSlide(slideIndex);
            }}
            style={styles.heroSlider}
          >
            {heroSlides.map((slide, index) => (
              <View key={slide.id} style={[styles.heroSlide, { width }]}>
                <Image 
                  source={slide.image} 
                  style={styles.heroImage}
                  resizeMode="cover"
                />
                <View style={styles.heroOverlay} />
                <View style={styles.heroContent}>
                  <ThemedText style={styles.heroTitle}>{slide.title}</ThemedText>
                  {slide.subtitle && (
                    <ThemedText style={styles.heroSubtitle}>{slide.subtitle}</ThemedText>
                  )}
                  <TouchableOpacity 
                    style={styles.heroButton}
                    onPress={() => Linking.openURL(`https://www.brisa.com.tr${slide.url}`)}
                  >
                    <ThemedText style={styles.heroButtonText}>Keşfet</ThemedText>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Navigation Controls */}
          <View style={styles.heroControls}>
            <TouchableOpacity onPress={prevSlide} style={styles.heroNavButton}>
              <ThemedText style={styles.arrowText}>‹</ThemedText>
            </TouchableOpacity>
            
            <ThemedText style={styles.heroPagination}>
              {String(currentSlide + 1).padStart(2, '0')}/{String(TOTAL_SLIDES).padStart(2, '0')}
            </ThemedText>
            
            <TouchableOpacity onPress={nextSlide} style={styles.heroNavButton}>
              <ThemedText style={styles.arrowText}>›</ThemedText>
            </TouchableOpacity>
          </View>

          {/* Dots Indicator */}
          <View style={styles.heroIndicators}>
            {heroSlides.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.heroDot,
                  currentSlide === index && styles.heroDotActive
                ]}
                onPress={() => goToSlide(index)}
              />
            ))}
          </View>
        </View>

        <View style={styles.content}>
          {/* Mobilite Çözümleri */}
          <View style={styles.mobilityMainSection}>
            <ThemedText type="title" style={styles.mobilityMainTitle}>
              Mobilite Çözümleri
            </ThemedText>
            <ThemedText style={styles.mobilityMainDescription}>
              Bugünün gerekliliklerini yerine getirirken, geleceğe de hazırlanmak zorunda 
              olduğumuzun farkındayız. Kendimizi sadece bir lastik üreticisi olarak değil, 
              lastiğin ötesinde hizmetler sunan ve yolculuğun geleceğini tasarlayan bir şirket 
              olarak konumlandırıyoruz.
            </ThemedText>
            <TouchableOpacity 
              style={styles.mobilityMainButton}
              onPress={() => openUrl('https://www.brisa.com.tr/teknoloji-ve-yenilikcilik/mobilite-cozumleri')}
            >
              <ThemedText style={styles.mobilityMainButtonText}>
                Detaylı Bilgi →
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* Tarihçe ve CEO Mesajı Kutuları */}
          <View style={styles.brisaBoxesSection}>
            <View style={styles.boxRow}>
              <TouchableOpacity 
                style={styles.brisaBox}
                onPress={() => openUrl('https://www.brisa.com.tr/hakkimizda/tarihce')}
              >
                <Image 
                  source={require('@/assets/images/tarihce-box.jpg')} 
                  style={styles.boxImage}
                  resizeMode="cover"
                />
                <View style={styles.boxOverlay}>
                  <ThemedText style={styles.boxHeading}>BRİSA</ThemedText>
                  <ThemedText style={styles.boxTitle}>Tarihçe</ThemedText>
                  <View style={styles.boxButton}>
                    <ThemedText style={styles.boxButtonText}>
                      Detaylı Bilgi →
                    </ThemedText>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.brisaBox}
                onPress={() => openUrl('https://www.brisa.com.tr/hakkimizda/ceo-mesaji')}
              >
                <Image 
                  source={require('@/assets/images/brisa-home-1.jpg')} 
                  style={styles.boxImage}
                  resizeMode="cover"
                />
                <View style={styles.boxOverlay}>
                  <ThemedText style={styles.boxHeading}>BRİSA</ThemedText>
                  <ThemedText style={styles.boxTitle}>CEO Mesajı</ThemedText>
                  <View style={styles.boxButton}>
                    <ThemedText style={styles.boxButtonText}>
                      Detaylı Bilgi →
                    </ThemedText>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Teknoloji ve Yenilikçilik */}
          <View style={styles.technologySection}>
            <ThemedText type="title" style={styles.technologyTitle}>
              Teknoloji ve Yenilikçilik
            </ThemedText>
            <ThemedText style={styles.technologyDescription}>
              AR-GE Merkezimizdeki tasarım ve geliştirme çalışmaları, dijitalleşmede hız kazanan 
              yolculuğumuz ve girişimcilerle ortak yürüttüğümüz çalışmalarla sadece lastik 
              sektöründe değil yenilikte de lider olmayı hedefliyoruz.
            </ThemedText>
            <TouchableOpacity 
              style={styles.technologyButton}
              onPress={() => openUrl('https://www.brisa.com.tr/teknoloji-ve-yenilikcilik')}
            >
              <ThemedText style={styles.technologyButtonText}>
                Detaylı Bilgi →
              </ThemedText>
            </TouchableOpacity>
            <Image 
              source={require('@/assets/images/brisa-home-1.jpg')} 
              style={styles.technologyImage}
              resizeMode="cover"
            />
          </View>

          {/* Brisalı Olmak */}
          <View style={styles.careerSection}>
            <View style={styles.careerContent}>
              <View style={styles.careerLeft}>
                <ThemedText type="title" style={styles.careerTitle}>
                  Brisalı Olmak
                </ThemedText>
                <TouchableOpacity 
                  style={styles.careerButton}
                  onPress={() => openUrl('https://www.brisa.com.tr/brisali-olmak/acik-pozisyonlar')}
                >
                  <ThemedText style={styles.careerButtonText}>
                    Açık Pozisyonlar
                  </ThemedText>
                </TouchableOpacity>
              </View>
              <View style={styles.careerRight}>
                <ThemedText style={styles.careerDescription}>
                  Türkiye&apos;nin öncü ve yenilikçi kurumlarından birinde kariyer fırsatlarını değerlendirmek ister misin?
                </ThemedText>
              </View>
            </View>
          </View>

          {/* Yatırımcı Kiti */}
          <View style={styles.investorKitSection}>
            <View style={styles.investorBoxRow}>
              {/* Finansal Bilgiler - Beyaz */}
              <TouchableOpacity 
                style={[styles.investorBox, styles.investorBoxWhite]}
                onPress={() => openUrl('https://www.brisa.com.tr/yatirimci-iliskileri/sunumlar-ve-raporlar/finansal-tablolar-ve-bagimsiz-denetci-raporu/')}
              >
                <ThemedText style={styles.investorBoxHeading}>YATIRIMCI KİTİ</ThemedText>
                <ThemedText style={styles.investorBoxTitle}>Finansal Bilgiler</ThemedText>
                <View style={styles.investorBoxIcon}>
                  <ThemedText style={styles.investorIconText}>📊</ThemedText>
                </View>
                <View style={styles.investorBoxButton}>
                  <ThemedText style={styles.investorBoxButtonText}>
                    Detaylı Bilgi →
                  </ThemedText>
                </View>
              </TouchableOpacity>

              {/* Özet Finansal Tablolar - Mavi */}
              <TouchableOpacity 
                style={[styles.investorBox, styles.investorBoxBlue]}
                onPress={() => openUrl('https://www.brisa.com.tr/uploads/docs/Brisa_ozet_Finansallar_1c_2025.pdf')}
              >
                <ThemedText style={[styles.investorBoxHeading, styles.investorBoxHeadingWhite]}>YATIRIMCI KİTİ</ThemedText>
                <ThemedText style={[styles.investorBoxTitle, styles.investorBoxTitleWhite]}>Özet Finansal Tablolar</ThemedText>
                <View style={styles.investorBoxIcon}>
                  <ThemedText style={styles.investorIconTextWhite}>⬇</ThemedText>
                </View>
                <View style={styles.investorBoxButtonWhite}>
                  <ThemedText style={[styles.investorBoxButtonText, styles.investorBoxButtonTextWhite]}>
                    İndir - PDF 76KB
                  </ThemedText>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Haberler */}
          <View style={styles.newsSection}>
            <ThemedText type="title" style={styles.newsTitle}>
              Haberler
            </ThemedText>
            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.newsScrollContainer}
              style={styles.newsScrollView}
            >
              {newsData.map((news) => (
                <TouchableOpacity 
                  key={news.id}
                  style={styles.newsCard}
                  onPress={() => openUrl('https://www.brisa.com.tr' + news.url)}
                >
                  <Image source={news.image} style={styles.newsCardImage} resizeMode="cover" />
                  <View style={styles.newsCardContent}>
                    <ThemedText style={styles.newsCardTitle} numberOfLines={3}>
                      {news.title}
                    </ThemedText>
                    <View style={styles.newsCardFooter}>
                      <ThemedText style={styles.newsCardDate}>{news.date}</ThemedText>
                      <View style={styles.newsCardArrow}>
                        <ThemedText style={styles.newsCardArrowText}>→</ThemedText>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            
            <TouchableOpacity 
              style={styles.allNewsButton}
              onPress={() => openUrl('https://www.brisa.com.tr/haberler')}
            >
              <ThemedText style={styles.allNewsText}>
                Tüm Haberler →
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footerSection}>
            <View style={styles.footerContent}>
              {/* Logo ve Designer */}
              <View style={styles.footerColumn}>
                <BrisaLogo width={80} height={22} />
               
              </View>

              {/* Hızlı Linkler */}
              <View style={styles.footerColumn}>
                <ThemedText style={styles.footerTitle}>Hızlı Linkler</ThemedText>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/hakkimizda')}>
                  <ThemedText style={styles.footerLink}>Hakkımızda</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/teknoloji-ve-yenilikcilik')}>
                  <ThemedText style={styles.footerLink}>Teknoloji ve Yenilikçilik</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/yatirimci-iliskileri')}>
                  <ThemedText style={styles.footerLink}>Yatırımcı İlişkileri</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/surdurulebilirlik')}>
                  <ThemedText style={styles.footerLink}>Sürdürülebilirlik</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/brisali-olmak')}>
                  <ThemedText style={styles.footerLink}>Brisalı Olmak</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/haberler')}>
                  <ThemedText style={styles.footerLink}>Haberler</ThemedText>
                </TouchableOpacity>
              </View>

              {/* İletişim */}
              <View style={styles.footerColumn}>
                <ThemedText style={styles.footerTitle}>İletişim</ThemedText>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/bize-ulasin')}>
                  <ThemedText style={styles.footerLink}>Bize Ulaşın</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/iletisim-formu')}>
                  <ThemedText style={styles.footerLink}>İletişim Formu</ThemedText>
                </TouchableOpacity>
              </View>

              {/* Social Media */}
              <View style={styles.footerColumn}>
                <ThemedText style={styles.footerTitle}>@Follow Brisa</ThemedText>
                <TouchableOpacity onPress={() => openUrl('https://www.facebook.com/BrisaTurkiye')}>
                  <ThemedText style={styles.footerLink}>Facebook</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://twitter.com/BrisaTurkiye')}>
                  <ThemedText style={styles.footerLink}>Twitter</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.instagram.com/brisa.tr')}>
                  <ThemedText style={styles.footerLink}>Instagram</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.youtube.com/channel/UCzNt-uJOgl_EFX7p6LCB0-A')}>
                  <ThemedText style={styles.footerLink}>Youtube</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openUrl('https://www.linkedin.com/company/brisa-bridgestone-sabanci')}>
                  <ThemedText style={styles.footerLink}>Linkedin</ThemedText>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.footerSeparator} />
            
            {/* Sub Footer */}
            <View style={styles.subFooter}>
              {/* Copyright */}
              <View style={styles.copyrightSection}>
                <ThemedText style={styles.copyrightText}>
                  © 2025 COPYRIGHT BRİSA ALL RIGHTS RESERVED
                </ThemedText>
              </View>

              {/* Yasal Linkler */}
              <View style={styles.legalLinksSection}>
                <TouchableOpacity 
                  style={styles.cookieButton}
                  onPress={() => openUrl('https://www.brisa.com.tr/cerez-politikasi')}
                >
                  <ThemedText style={styles.cookieIcon}>🍪</ThemedText>
                  <ThemedText style={styles.legalLinkText}>ÇEREZ AYARLARI</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openUrl('https://www.sabanci.com/')}>
                  <ThemedText style={styles.legalLinkText}>SABANCI HOLDİNG</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openUrl('https://www.bridgestone.com/')}>
                  <ThemedText style={styles.legalLinkText}>BRIDGESTONE CORPORATION</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/kisisel-verilerin-korunmasi')}>
                  <ThemedText style={styles.legalLinkText}>KİŞİSEL VERİLERİN KORUNMASI</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/kullanim-kosullari')}>
                  <ThemedText style={styles.legalLinkText}>KULLANIM KOŞULLARI</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/gizlilik')}>
                  <ThemedText style={styles.legalLinkText}>GİZLİLİK</ThemedText>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => openUrl('https://www.brisa.com.tr/cerez-politikasi')}>
                  <ThemedText style={styles.legalLinkText}>ÇEREZ AYDINLATMA METNİ</ThemedText>
                </TouchableOpacity>
              </View>

              {/* Designer (Mobil için tekrar) */}
              <View style={styles.mobileDesignerSection}>
                <TouchableOpacity>
                  <ThemedText style={styles.mobileDesignerText}>
                    stolen BY kry23
                  </ThemedText>
                </TouchableOpacity>
              </View>

              {/* Sabancı 100. Yıl Logosu */}
              <View style={styles.sabanci100Section}>
                <View style={styles.sabanci100Container}>
                  <View style={styles.sabanci100Line} />
                  <View style={styles.sabanci100LogoContainer}>
                    <ThemedText style={styles.sabanci100Logo}>SABANCI 100</ThemedText>
                    <ThemedText style={styles.sabanci100Subtitle}>BİRLİKTELİĞİN YÜZYILI</ThemedText>
                  </View>
                  <View style={styles.sabanci100Line} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0,
  },
  heroContainer: {
    height: 700,
    position: 'relative',
    overflow: 'hidden',
  },
  heroSlider: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },

  heroSlide: {
    width: width,
    height: 700,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 2,
  },
  heroContent: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    zIndex: 3,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroButton: {
    backgroundColor: '#0066CC',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heroControls: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
    gap: 20,
  },
  heroNavButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  arrowText: {
    ...utils.font.bold,
    color: '#0066CC',
    fontSize: 24,
  },
  heroPagination: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  heroIndicators: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
    gap: 8,
  },
  heroDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  heroDotActive: {
    backgroundColor: '#fff',
    width: 24,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 0,
  },
  investorSection: {
    marginBottom: 32,
  },
  investorCard: {
    backgroundColor: '#0066CC',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    minHeight: 300,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  investorLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    letterSpacing: 1,
  },
  investorTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 40,
  },
  downloadButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    width: 80,
    height: 80,
  },
  downloadIcon: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  downloadText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.9,
  },
  achievementsSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
    color: '#0066CC',
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  achievementCard: {
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
  },
  achievementIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  achievementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  quickLinksSection: {
    marginBottom: 32,
  },
  quickLinksGrid: {
    gap: 12,
  },
  quickLinkCard: {
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
    borderLeftWidth: 4,
  },
  quickLinkIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  linkIconText: {
    fontSize: 24,
  },
  quickLinkContent: {
    flex: 1,
  },
  quickLinkTitle: {
    marginBottom: 4,
    color: '#333',
  },
  quickLinkSubtitle: {
    color: '#666',
    fontSize: 14,
  },
  newsSection: {
    padding: 24,
    backgroundColor: 'white',
    marginBottom: 32,
  },
  newsTitle: {
    color: '#0066CC',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  newsScrollContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  newsScrollView: {
    marginBottom: 24,
  },
  newsCard: {
    width: width * 0.77, // 1.3 slide göstermek için ekran genişliğinin %77'si
    backgroundColor: 'white',
    borderRadius: 12,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  newsCardImage: {
    width: '100%',
    height: 140,
  },
  newsCardContent: {
    padding: 16,
    flex: 1,
  },
  newsCardTitle: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 18,
  },
  newsCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  newsCardDate: {
    color: '#666',
    fontSize: 12,
  },
  newsCardArrow: {
    paddingLeft: 8,
  },
  newsCardArrowText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  allNewsButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#0066CC',
    paddingBottom: 4,
    alignSelf: 'center',
  },
  allNewsText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: '600',
  },
  sustainabilityHero: {
    position: 'relative',
    height: 300,
    marginBottom: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  sustainabilityImage: {
    width: '100%',
    height: '100%',
  },
  sustainabilityOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 102, 204, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  sustainabilityTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sustainabilitySubtitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 16,
    opacity: 0.9,
  },
  sustainabilityText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    opacity: 0.9,
  },
  sustainabilityButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  sustainabilityButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  mobilitySection: {
    marginBottom: 32,
    gap: 16,
  },
  mobilityTextSection: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mobilityMainSection: {
    padding: 24,
    backgroundColor: 'white',
    marginBottom: 32,
    alignItems: 'center',
  },
  mobilityMainTitle: {
    color: '#0066CC',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  mobilityMainDescription: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  mobilityMainButton: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#0066CC',
    paddingBottom: 4,
  },
  mobilityMainButtonText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: '600',
  },
  mobilityCard: {
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  mobilityTitle: {
    color: 'white',
    marginBottom: 16,
  },
  mobilityDescription: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    opacity: 0.9,
  },
  mobilityButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
  mobilityButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  mobilityImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  contactSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  contactButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  websiteButton: {
    flex: 1,
    backgroundColor: '#0066CC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  websiteButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  brisaCardsSection: {
    marginBottom: 32,
  },
  cardRow: {
    flexDirection: 'row',
    gap: 12,
  },
  brisaCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  cardContent: {
    marginTop: 16,
  },
  cardHeading: {
    color: '#0066CC',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardTitle: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDetail: {
    color: '#666',
    fontSize: 14,
  },
  ceoSection: {
    marginBottom: 32,
  },
  ceoCard: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  ceoImage: {
    width: '100%',
    height: 250,
  },
  ceoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 102, 204, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  ceoLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  ceoTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  ceoButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  ceoButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  paginationArrow: {
    padding: 8,
  },
  paginationText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationCurrent: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: '600',
  },
  paginationSeparator: {
    color: '#666',
    fontSize: 16,
  },
  paginationTotal: {
    color: '#666',
    fontSize: 16,
  },
  exploreContainer: {
    alignItems: 'center',
    padding: 16,
  },
  exploreText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: '600',
  },
  brisaBoxesSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  boxRow: {
    flexDirection: 'column',
    gap: 20,
  },
  brisaBox: {
    width: '100%',
    height: 385,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  boxImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  boxOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 102, 204, 0.8)',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 24,
  },
  boxHeading: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  boxTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  boxButton: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 4,
    marginTop: 'auto',
  },
  boxButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  technologySection: {
    padding: 24,
    backgroundColor: 'white',
    marginBottom: 32,
    alignItems: 'center',
  },
  technologyTitle: {
    color: '#0066CC',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  technologyDescription: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  technologyButton: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#0066CC',
    paddingBottom: 4,
    marginBottom: 24,
  },
  technologyButtonText: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: '600',
  },
  technologyImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginTop: 16,
  },
  careerSection: {
    padding: 24,
    backgroundColor: '#f5f5f5',
    marginBottom: 32,
  },
  careerContent: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
  },
  careerLeft: {
    width: '100%',
    alignItems: 'center',
  },
  careerRight: {
    width: '100%',
    alignItems: 'center',
  },
  careerTitle: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  careerButton: {
    backgroundColor: '#333',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 16,
  },
  careerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  careerDescription: {
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  investorKitSection: {
    padding: 24,
    backgroundColor: 'white',
    marginBottom: 32,
  },
  investorBoxRow: {
    flexDirection: 'column',
    gap: 16,
  },
  investorBox: {
    width: '100%',
    height: 385,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  investorBoxWhite: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  investorBoxBlue: {
    backgroundColor: '#0C1C8C',
  },
  investorBoxHeading: {
    color: '#0066CC',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  investorBoxTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  investorBoxIcon: {
    marginBottom: 16,
  },
  investorIconText: {
    color: '#0066CC',
    fontSize: 24,
    fontWeight: 'bold',
  },
  investorBoxButton: {
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: '#0066CC',
    paddingTop: 8,
    marginTop: 'auto',
  },
  investorBoxButtonText: {
    color: '#0066CC',
    fontSize: 14,
    fontWeight: '600',
  },
  investorBoxHeadingWhite: {
    color: 'white',
  },
  investorBoxTitleWhite: {
    color: 'white',
  },
  investorIconTextWhite: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  investorBoxButtonTextWhite: {
    color: 'white',
  },
  investorBoxButtonWhite: {
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: 'white',
    paddingTop: 8,
    marginTop: 'auto',
  },
  footerSection: {
    padding: 24,
    backgroundColor: '#f8f9fa',
    marginBottom: 0,
  },
  footerContent: {
    flexDirection: 'column',
    gap: 24,
  },
  footerColumn: {
    width: '100%',
    marginBottom: 16,
  },
  footerTitle: {
    color: '#0066CC',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  footerLink: {
    color: '#666',
    fontSize: 14,
    marginBottom: 8,
    paddingVertical: 4,
  },
  designerText: {
    color: '#999',
    fontSize: 12,
    marginTop: 16,
    fontStyle: 'italic',
  },
  footerSeparator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 24,
    marginBottom: 16,
  },
  subFooter: {
    flexDirection: 'column',
    gap: 16,
  },
  copyrightSection: {
    width: '100%',
    alignItems: 'center',
  },
  copyrightText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  legalLinksSection: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
  },
  cookieButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cookieIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  legalLinkText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 4,
  },
  mobileDesignerSection: {
    alignItems: 'center',
    marginTop: 16,
  },
  mobileDesignerText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
  sabanci100Section: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  sabanci100Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  sabanci100Line: {
    flex: 1,
    height: 2,
    backgroundColor: '#011689',
    marginTop: 30,
  },
  sabanci100LogoContainer: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
  },
  sabanci100Logo: {
    color: '#011689',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sabanci100Subtitle: {
    color: '#011689',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 2,
  },
});
