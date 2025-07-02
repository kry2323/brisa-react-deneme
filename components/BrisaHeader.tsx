import { FONT_FAMILY, FONT_WEIGHTS } from '@/constants/Typography';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { BrisaLogo } from './BrisaLogo';

const { width } = Dimensions.get('window');

interface MenuItem {
  title: string;
  route?: string;
  url?: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Hakkımızda',
    route: '/about',
    submenu: [
      { title: 'Biz Kimiz?', url: 'https://www.brisa.com.tr/hakkimizda/biz-kimiz/' },
      { title: 'Kurumsal Sunum', url: 'https://www.brisa.com.tr/uploads/docs/Corporate_Presentation_01_2025_TR.pdf' },
      { title: 'Ürün ve Hizmetlerimiz', url: 'https://www.brisa.com.tr/hakkimizda/urun-ve-hizmetlerimiz/' },
      { title: 'Tarihçe', url: 'https://www.brisa.com.tr/hakkimizda/tarihce/' },
      { title: 'Ödüller', url: 'https://www.brisa.com.tr/hakkimizda/oduller/' },
      { title: 'CEO Mesajı', url: 'https://www.brisa.com.tr/hakkimizda/ceo-mesaji/' },
    ]
  },
  {
    title: 'Teknoloji ve Yenilikçilik',
    route: '/technology',
    submenu: [
      { title: 'AR-GE Merkezi', url: 'https://www.brisa.com.tr/teknoloji-ve-yenilikcilik/arge-merkezi/' },
      { title: 'Akıllı Üretim', url: 'https://www.brisa.com.tr/teknoloji-ve-yenilikcilik/akilli-uretim/' },
      { title: 'Mobilite Çözümleri', url: 'https://www.brisa.com.tr/teknoloji-ve-yenilikcilik/mobilite-cozumleri/' },
      { title: 'Dijitalleşme Yolculuğumuz', url: 'https://www.brisa.com.tr/teknoloji-ve-yenilikcilik/dijitallesme-yolculugumuz/' },
    ]
  },
  {
    title: 'Yatırımcı İlişkileri',
    route: '/investor',
    submenu: [
      { title: 'Şirket Bilgileri', url: 'https://www.brisa.com.tr/yatirimci-iliskileri/kurumsal/sirket-bilgileri/' },
      { title: 'Yatırımcı Sunumları', url: 'https://www.brisa.com.tr/yatirimci-iliskileri/sunumlar-ve-raporlar/yatirimci-sunumlari/' },
      { title: 'Faaliyet Raporları', url: 'https://www.brisa.com.tr/yatirimci-iliskileri/sunumlar-ve-raporlar/faaliyet-raporlari/' },
      { title: 'Hisse Fiyatı', url: 'https://www.brisa.com.tr/yatirimci-iliskileri/yatirimci-araclari/hisse-fiyati/' },
    ]
  },
  {
    title: 'Sürdürülebilirlik',
    route: '/sustainability',
    submenu: [
      { title: 'Raporlarımız', url: 'https://www.brisa.com.tr/surdurulebilirlik/raporlarimiz/' },
      { title: 'Sürdürülebilirlik Yaklaşımı', url: 'https://www.brisa.com.tr/surdurulebilirlik/surdurulebilirlik-yaklasimi/' },
      { title: 'Turnalar Hep Uçsun', url: 'https://www.brisa.com.tr/surdurulebilirlik/turnalar-hep-ucsun/' },
    ]
  },
  {
    title: 'Brisalı Olmak',
    route: '/career',
    submenu: [
      { title: 'Brisa&apos;da İşin Geleceği', url: 'https://www.brisa.com.tr/brisali-olmak/brisada-isin-gelecegi/' },
      { title: 'Açık Pozisyonlar', url: 'https://www.brisa.com.tr/brisali-olmak/acik-pozisyonlar/' },
      { title: 'İş Yerinde Eşitlik ve Çeşitlilik', url: 'https://www.brisa.com.tr/brisali-olmak/is-yerinde-esitlik-ve-cesitlilik/' },
    ]
  },
  {
    title: 'Medya Merkezi',
    route: '/news',
    submenu: [
      { title: 'Haberler', route: '/news' },
      { title: 'Basın Bültenleri', url: 'https://www.brisa.com.tr/haberler/' },
    ]
  }
];

export function BrisaHeader() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleMenuPress = (item: MenuItem) => {
    if (item.route) {
      router.push(item.route as any);
      setMenuVisible(false);
    } else if (item.url) {
      Linking.openURL(item.url);
      setMenuVisible(false);
    }
  };

  const toggleSubmenu = (title: string) => {
    setExpandedMenu(expandedMenu === title ? null : title);
  };

  const handleSearch = () => {
    setSearchVisible(true);
  };

  const handleLanguage = () => {
    Alert.alert('Dil Seçimi', 'Türkçe seçili', [{ text: 'Tamam' }]);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {/* Logo */}
            <TouchableOpacity 
              style={styles.logoContainer}
              onPress={() => router.push('/')}
            >
              <BrisaLogo width={120} height={32} />
            </TouchableOpacity>

            {/* Header Actions */}
            <View style={styles.headerActions}>
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={handleSearch}
              >
                <Text style={styles.iconText}>🔍</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.iconButton}
                onPress={handleLanguage}
              >
                <Text style={styles.iconText}>🌐</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => setMenuVisible(true)}
              >
                <Text style={styles.iconText}>☰</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* Mobile Menu Modal */}
      <Modal
        visible={menuVisible}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <BrisaLogo width={100} height={26} />
            <TouchableOpacity 
              onPress={() => setMenuVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeIconText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <View key={index} style={styles.menuItemContainer}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    if (item.submenu) {
                      toggleSubmenu(item.title);
                    } else {
                      handleMenuPress(item);
                    }
                  }}
                >
                  <Text style={styles.menuItemText}>{item.title}</Text>
                  {item.submenu && (
                    <Text style={styles.chevronIcon}>
                      {expandedMenu === item.title ? "▲" : "▼"}
                    </Text>
                  )}
                </TouchableOpacity>

                {item.submenu && expandedMenu === item.title && (
                  <View style={styles.submenuContainer}>
                    {item.submenu.map((subItem, subIndex) => (
                      <TouchableOpacity
                        key={subIndex}
                        style={styles.submenuItem}
                        onPress={() => handleMenuPress(subItem)}
                      >
                        <Text style={styles.submenuItemText}>{subItem.title}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Search Modal */}
      <Modal
        visible={searchVisible}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.searchOverlay}>
          <View style={styles.searchContainer}>
            <View style={styles.searchHeader}>
              <Text style={styles.searchTitle}>Brisa.com.tr&apos;de Ara</Text>
              <TouchableOpacity 
                onPress={() => setSearchVisible(false)}
                style={styles.searchCloseButton}
              >
                <Text style={styles.closeIconText}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.searchContent}>
              <Text style={styles.popularSearchTitle}>Popüler Aramalar</Text>
              <TouchableOpacity 
                style={styles.popularSearchItem}
                onPress={() => {
                  Linking.openURL('https://www.brisa.com.tr/yatirimci-iliskileri/sunumlar-ve-raporlar/faaliyet-raporlari');
                  setSearchVisible(false);
                }}
              >
                <Text style={styles.popularSearchText}>Faaliyet Raporları</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.popularSearchItem}
                onPress={() => {
                  Linking.openURL('https://www.brisa.com.tr/yatirimci-iliskileri/sunumlar-ve-raporlar/yatirimci-sunumlari');
                  setSearchVisible(false);
                }}
              >
                <Text style={styles.popularSearchText}>Yatırımcı Sunumu</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.popularSearchItem}
                onPress={() => {
                  Linking.openURL('https://www.brisa.com.tr/teknoloji-ve-yenilikcilik/mobilite-cozumleri');
                  setSearchVisible(false);
                }}
              >
                <Text style={styles.popularSearchText}>Mobilite</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    zIndex: 95,
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingVertical: 12,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconButton: {
    padding: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    minWidth: 36,
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
    color: '#666',
    fontFamily: FONT_FAMILY,
  },
  closeIconText: {
    fontSize: 18,
    color: '#333',
    fontWeight: FONT_WEIGHTS.bold,
    fontFamily: FONT_FAMILY,
  },
  chevronIcon: {
    fontSize: 14,
    color: '#666',
    fontFamily: FONT_FAMILY,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  closeButton: {
    padding: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    minWidth: 36,
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    flex: 1,
  },
  menuItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: FONT_WEIGHTS.semibold,
    fontFamily: FONT_FAMILY,
    color: '#333',
  },
  submenuContainer: {
    backgroundColor: '#f8f9fa',
  },
  submenuItem: {
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  submenuItemText: {
    fontSize: 14,
    color: '#666',
    fontFamily: FONT_FAMILY,
  },
  searchOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: width - 40,
    maxHeight: 400,
  },
  searchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.semibold,
    fontFamily: FONT_FAMILY,
    color: '#333',
  },
  searchCloseButton: {
    padding: 4,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    minWidth: 28,
    minHeight: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContent: {
    padding: 20,
  },
  popularSearchTitle: {
    fontSize: 14,
    fontWeight: FONT_WEIGHTS.semibold,
    fontFamily: FONT_FAMILY,
    color: '#666',
    marginBottom: 15,
  },
  popularSearchItem: {
    paddingVertical: 12,
  },
  popularSearchText: {
    fontSize: 16,
    color: '#0066CC',
    fontFamily: FONT_FAMILY,
  },
}); 