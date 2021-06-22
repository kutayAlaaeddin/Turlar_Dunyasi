# Turlar Dünyası 
Bu projeyi react.js teknolojisini öğrenirken geliştirdim. SPA (tek sayfalı uygulama) şeklinde geliştirdim. Elimizde beş tur kategorisi var (Sağlık turları, Kültür turları, Kış Turları, Eğlence Turları, Diğer Turlar) her bir kategori bir obje (tur) listesini temsil ediyor. Yapmak istedğim şey şudur seçilen kategorinin içindeki turları sırayla göstermektir ve önceki sonraki şeklinde gezinti yapabilmektir.

##  Kod açıklaması
### Lists klasörü
1- 5 dosya barındırıyor ve her dosya bir fonkisyon ile bir list döndürüyor <br/>
2- bu listelerin elemanları objectlerden ibarettir. <br/>
3- her bir objenin (tur) içinde belirli özellikler mevcüttür <br/>
### Content.js
Bu dosya projenin en çok işlev barındıran dosyadır. burada her bir liste için bir **counter** tanımlaması yapıldı bu counter gezinti işlemi yapılacaktır (sonraki, önceki) butonları. ardından lists klasöründe bulunan dosyaları bu dosyaya dahil edip her birine indis olarak counter verdim ve map'ten geçirerek CreatContent adlı dosyaya props olarak gönderim.
## CreateContent.js
burada ekrana yazdırma ve gelen verileri istenilen yerlere yerleştirme işlemleri yapıldı.
