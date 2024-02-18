import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Spacer from '../common/Spacer';

const HomeInformation = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div>
                <p>
                  <b>
                    Güngör GENÇAY 06.09.2007 Kadın Durağından Şiirler-2 başlıklı
                    yazısından;
                  </b>
                </p>

                <p>
                  <b>Kalbim Tut Beni (2005) Arzu Karadağ </b>
                </p>
                <p>
                  “Kaç sürgün yedik!/ Göçer bir kez daha göçerik/ Mevsimler
                  bahar da olur/ Temmuzlarda yan yana/ Munzur Munzur tüteriz bir
                  gün!” diyen Arzu Karadağ, 1979 yılında Tunceli’de doğmuş ve
                  öğrenimini Bursa Uludağ Üniversitesi’nde yapmıştır.
                  <br /> Arka kapak yazısında Burhan Gündoğan: “Arzu Karadağ’ın
                  şiirlerinde bugün bir tarafa bırakılmış neredeyse unutulmuş,
                  bir halk şiiri tarzı, bir halk yakarış ağzı ve daha çok da
                  söylence tarzını bulmak mümkün. Bununla birlikte günün şiir
                  anlayışına da uzak değil. Arzu Karadağ, kendi sesini, kendi
                  soluğunu, kendi iç kırılmalarını, kendi iç çıkışlarını
                  şiirlerine emiştirebilmiş; yüreğindeki çıkışları tatlı, ince
                  bir dille sunabilmiştir.” Belirlemesiyle Arzu Karadağ şiirinin
                  açımlamasını yapıyor. Doğduğu kentte yaşanan zorluklar,
                  zorbalıklar, dağlarda göveren umut, gitmelerde anı olarak
                  bırakılan buruk gülüşler doğal olarak yansımış Arzu Karadağ’ın
                  şiirine. <br /> İnsanım, Bir Gün, Leke, Seni de Yazmalı, Saat
                  Vururken Dördü, Zaman Geçtikçe, Adalet, Yaşamak Yine de,
                  Mahkûm, Irak vb. şiirlerinde, insanî değerlerle, toplumsal
                  olaylara duyarlıkla eğilen ve irdeleyen Arzu Karadağ’ın
                  açık-anlaşılır bir yazma tarzı var. Kendinden çıkışlı da olsa,
                  söyledikleri sevecenlikle insanları kucaklıyor. Sınıfsal
                  ayrışmayı “Sen sarı saçlı/Ama/ Yoksul kadın/ Her sabah
                  taradığın/ Hangi yanın” dizeleriyle özlü ve incelikli bir
                  biçimde ifade edebilen Karadağ’ın yüzünü bu yöne döndürmesi ve
                  gereksiz sözcük yinelemelerinden kaçınması şiirini daha da
                  güçlü kılacağı kanısındayım.
                  <br /> Kora yayınlarından çıkan kitabı ve şairini tanımak,
                  okuyucu için bir kazanım olacak.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer size={50} />
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <Card>
            <Card.Body>
              <Image
                className="img-fluid "
                src="../assets/books/Ceyhun-Atuf-Kansu-mektup.png"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeInformation;
