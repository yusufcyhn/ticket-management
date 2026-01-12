# Talep / Ticket Yönetim Uygulaması – Proje Notları

## Case Study

Bu case study’de temel beklentinin; kapsamı büyütmeden,
ancak uçtan uca çalışan, temiz ve anlaşılır bir full-stack uygulama
geliştirmek olduğunu anladım.

Bu nedenle:
- Karmaşık authentication yapılarını,
- Rol bazlı yetkilendirmeleri,
- Gelişmiş state management çözümlerini

bilinçli olarak kapsam dışında bıraktım.

Odak noktam;
- Doğru API tasarımı,
- Temiz frontend mimarisi,
- Anlaşılır veri modelleri
ve
- Kullanıcı açısından çalışır bir arayüz
oldu.

## İzlenen Geliştirme Sırası

Projede aşağıdaki adımlar izlenmiştir:

1. Öncelikle backend tarafında ticket modeli oluşturulmuş,
   temel CRUD endpoint’leri yazılmıştır.
2. Backend sqlite ile bağlanmıştır.
3. API uçları test edildikten sonra frontend geliştirmesine geçilmiştir.
4. Angular tarafında:
   - Service katmanı oluşturulmuş
   - Component yapısı sade tutulmuştur.
5. Ticket listeleme, oluşturma ve güncelleme akışları tamamlanmıştır.
6. UI tarafında okunabilirlik ve responsive yapı önceliklendirilmiştir.
7. Bonus olarak kullanıcı gezinti geçmişi localStorage üzerinde
   saklanarak ekrana yansıtılmıştır.
8. Ticket detay sayfası revize edilmiştir.
9. Son aşamada dokümantasyon ve proje düzeni tamamlanmıştır.




## Proje Amacı
Bu proje, **Rast Mobile Bilgi Teknolojileri LTD. Şti.** Full-Stack Case Study kapsamında geliştirilmiş basit bir Talep/Ticket Yönetim Uygulamasıdır.

Amaç; kapsamı gereksiz büyütmeden, **çalışan, temiz, anlaşılır ve sürdürülebilir** bir full-stack uygulama ortaya koymaktır.  
Proje; frontend, backend, veri modeli ve API tasarımını kapsayacak şekilde uçtan uca ele alınmıştır.

---

## Geliştirme Süreci ve İzlenen Adımlar

### 1. Backend
- Backend tarafı **.NET Core Web API** kullanılarak geliştirilmiştir.
- Ticket yönetimi için RESTful prensiplere uygun CRUD endpoint’leri oluşturulmuştur.
- Ticket modeli aşağıdaki alanları içermektedir:
  - `Id`
  - `Title`
  - `Description`
  - `Status` (Open, InProgress, Closed)
  - `AssignedTo`
- API tasarımında:
  - Anlamlı endpoint isimleri
  - HTTP method’larının doğru kullanımı
  - Temiz ve sade response yapıları
  esas alınmıştır.
- Veriler kalıcı olarak bir veritabanında(sqlite) saklanmaktadır.

---

### 2. Frontend
- Frontend tarafında **Angular 20** kullanılmıştır.
- Proje, Angular’ın **standalone component** yaklaşımına uygun şekilde yapılandırılmıştır.
- Kod organizasyonu kapsamında:
  - Component
  - Service
  - Model / Interface
  yapıları birbirinden ayrılmıştır.

Geliştirilen ekranlar:
- Ticket Listesi
- Ticket Oluşturma
- Ticket Güncelleme
- Ticket Detay Sayfası

Ticket detay ekranında:
- Ticket’a ait başlık, açıklama, durum ve atanan kişi bilgileri görüntülenmektedir.
- Liste ekranından detay sayfasına yönlendirme yapılabilmektedir.

Atama işlemleri:
- `AssignedTo` alanı dropdown/select bileşeni ile kullanıcıya sunulmuştur.
- Ticket oluşturma ve güncelleme aşamalarında değiştirilebilir yapıdadır.

---

### 3. UI & UX
- Ticket listesi CSS Grid kullanılarak responsive yapıda tasarlanmıştır.
- `auto-fill` ve `minmax` kullanımı ile ana responsive yapı sağlanmıştır.
- Mobil ekranlarda kullanıcı deneyimini iyileştirmek amacıyla,
  sınırlı sayıda `media query` kullanılarak:
  - Aksiyon butonları dikey hizalanmış
  - Kart içi boşluklar optimize edilmiştir
- Ticket durumları (Open, InProgress, Closed) arka plan ve metin renkleri ile
  görsel olarak ayrıştırılmıştır.
- Ticket detay ekranı kart (card) yapısı ile sunularak okunabilirlik artırılmıştır.
- Form alanlarında label kullanımı ile kullanıcı deneyimi güçlendirilmiştir.

Responsive tasarım; mobil, tablet ve desktop ekran boyutlarında test edilmiştir.


---

### 4. Bonus – Son Gezilen Sayfalar
- Kullanıcının ziyaret ettiği sayfalar **localStorage** içerisinde tutulmaktadır.
- “Son gezdiklerim” listesi ekran üzerinde ayrı bir alanda gösterilmektedir.
- Bu özellik, Angular service yapısı kullanılarak merkezi ve yeniden kullanılabilir şekilde geliştirilmiştir.

---


