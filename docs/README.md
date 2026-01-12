Talep / Ticket Yönetim Uygulaması

Bu proje, Rast Mobile Full-Stack Case Study kapsamında geliştirilmiş basit bir Talep/Ticket Yönetim Uygulamasıdır.
Kullanıcılar ticket oluşturabilir, listeleyebilir, detayına bakabilir ve güncelleyebilir.

Proje Yapısı:
- /frontend → Angular 20 frontend
- /backend → .NET Core Web API backend
- /postman → Postman collection
- /docs → Proje notları

Gereksinimler:
- Node.js >= 18
- Angular CLI >= 20
- .NET Core SDK >= 7

Backend Çalıştırma:
1. Terminali aç ve backend klasörüne git:
   cd backend
2. Dotnet ile çalıştır:
   dotnet run
3. API artık http://localhost:5062 üzerinden kullanılabilir.

Frontend Çalıştırma:
1. Terminali aç ve frontend klasörüne git:
   cd frontend
2. Paketleri yükle:
   npm install
3. Angular uygulamasını çalıştır:
   ng serve
4. Tarayıcıda http://localhost:4200 aç.

CRUD API Endpoint’leri (Postman):
- GET /api/Tickets → Tüm ticket’lar
- GET /api/Tickets/:id → Belirli ticket
- POST /api/Tickets → Yeni ticket
- PUT /api/Tickets/:id → Ticket güncelle
- DELETE /api/Tickets/:id → Ticket sil

Özellikler:
- Ticket CRUD işlemleri
- AssignedTo alanı dropdown ile atanabilir
- Ticket durumları: Open, InProgress, Closed (renklendirilmiş)
- Düzenleme ekranında status ve assignedTo değiştirilebilir
- Responsive tasarım (mobil, tablet, desktop uyumlu)
- Son gezilen sayfalar localStorage’da tutulur ve listelenir

Kullanım Örnekleri:

Yeni ticket oluştur:
POST http://localhost:5062/api/Tickets
{
  "title": "Test Ticket",
  "description": "Deneme",
  "status": "Open",
  "assignedTo": "Ali"
}

Tüm ticketları listele:
GET http://localhost:5062/api/Tickets

Ticket güncelle:
PUT http://localhost:5062/api/Tickets/1
{
  "title": "Güncellenmiş Ticket",
  "description": "Açıklama güncellendi",
  "status": "InProgress",
  "assignedTo": "Fatih"
}

Ticket sil:
DELETE http://localhost:5062/api/Tickets/1

Notlar:
- Frontend ve backend uçtan uca entegre çalışmaktadır.
- Kodlar component ve service yapısına ayrılmıştır.
- RESTful API ve responsive tasarım kurallarına uyulmuştur.
- Daha detaylı açıklamalar için /docs/project-notes.md dosyasına bakabilirsiniz.
- UI mobil ve tablet cihazlar için test edilmiştir, tüm ekran boyutlarında düzgün çalışır.
- Kullanıcı deneyimi için düzenleme ekranlarında label ve hintlar eklenmiştir.
