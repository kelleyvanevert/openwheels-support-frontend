
angular.module('openwheels.EMAILER_TEMPLATES', [])

.value('EMAILER_TEMPLATES', [
  {
    key: "Welkom - NL",
    subject: "Welkom!",
    content: `Beste {{ VOORNAAM }},

Hartelijk dank voor het aanmelden bij MyWheels. Leuk dat je meedoet met autodelen! 

Onze automatische controle kon jouw adres helaas niet verifiëren. Zou je ons per mail een poststuk met jouw naam, adres en recente datum erop (niet ouder dan een maand) kunnen sturen zodat we je adres kunnen verifiëren? Bijvoorbeeld een foto of screenshot van een telefoonfactuur, bankafschrift of salarisstrookje. De datum en het logo van de afzender moeten duidelijk op de foto staan, de inhoud van de brief hoeven we uiteraard niet te zien.

Als we het poststuk ontvangen zullen we deze controleren en zul je bericht ontvangen over jouw account.

Let op: wij controleren alleen poststukken tijdens kantoortijden (maandag t/m vrijdag 09:00 - 17:00).

Bij voorbaat dank.

Met vriendelijke groet,

het MyWheels Team`
  },
  {
    key: "Welkom - EN",
    subject: "Welcome!",
    content: `Dear {{ VOORNAAM }},

Thank you for registering at MyWheels. 

Unfortunately, our automatic check could not verify your address. 
Could you send us a proof of your adres, like a document with your name, address and recent date on it (not older than a month) so that we can verify your address? For example a photo or screenshot of a telephone invoice, bank statement or salary slip. The date and logo of the sender must be clearly stated on the document, we obviously do not have to see the content of the letter.

When we receive the document we will check it and you will receive a message about your account activation.

Please note: we only check postal items during office hours (Monday to Friday 9:00 AM - 5:00 PM).

Thanks in advance.

With kind regards,

the MyWheels Team`
  },
  {
    key: "Ongeldig rijbewijs - NL",
    subject: "Account informatie",
    content: `Beste {{ VOORNAAM }},

Hartelijk dank voor het aanmelden bij MyWheels. Leuk dat je meedoet met autodelen!

Jouw account is helaas automatisch gedeactiveerd omdat je rijbewijs ongeldig blijkt te zijn. Zou je een kopie van jouw rijbewijs willen sturen zodat we dit handmatig kunnen controleren? 

Het is ook goed als je jouw geboortedatum + rijbewijsnummer (bij nummer 5) en de verloopdatum van het rijbewijs per mail stuurt. Wij zullen dan controleren of je jouw gegevens correct hebt ingevuld. 

Mail gerust als je nog vragen hebt.

Met vriendelijke groet,

het MyWheels Team`
  },
  {
    key: "Ongeldig rijbewijs + poststuk - NL",
    subject: "Account informatie",
    content: `Beste {{ VOORNAAM }},

Hartelijk dank voor het aanmelden bij MyWheels. Leuk dat je meedoet met autodelen!

Jouw account is helaas automatisch gedeactiveerd omdat je rijbewijs ongeldig blijkt te zijn. Zou je een kopie van jouw rijbewijs willen sturen zodat we dit handmatig kunnen controleren? Het is ook goed als je jouw geboortedatum + rijbewijsnummer (bij nummer 5) en de verloopdatum van het rijbewijs per mail stuurt. Wij zullen dan controleren of je jouw gegevens correct hebt ingevuld. 

Daarnaast kon onze automatische controle kon jouw adres helaas niet verifiëren. Zou je ons een poststuk met recente datum (niet ouder dan een maand) kunnen sturen zodat we je adres kunnen verifiëren? Bijvoorbeeld een foto of screenshot van een telefoonfactuur, bankafschrift of salarisstrookje. De datum en het logo van de afzender moeten duidelijk op de foto staan, de inhoud van de brief hoeven we uiteraard niet te zien.

Mail gerust als je nog vragen hebt.

Met vriendelijke groet,

het MyWheels Team`
  },
  {
    key: "Boete - CJIB - Verlegd - NL",
    subject: "Ontvangen (verkeers)boete",
    content: `Beste {{ VOORNAAM }},

Van {{ BEGIN_BOEKING }} tot {{ EIND_BOEKING }} heb jij via MyWheels een auto gehuurd.
Wij hebben zojuist helaas een (verkeers)boete ontvangen welke gemaakt is tijdens jouw huurperiode.

Wij hebben het CJIB verzocht om deze boete te verleggen naar jou. Je zult hier t.z.t. bericht van ontvangen vanuit het CJIB om deze aan hen te voldoen. In de bijlage vind je de boete zoals wij hem hebben ontvangen. MyWheels heeft hiervoor € 10,- administratiekosten bij jou in rekening gebracht die je via [www.mywheels.nl/finance](https://mywheels.nl/finance) kunt betalen.

Mocht je vragen hebben n.a.v. bovenstaande, kun je deze e-mail beantwoorden. We zullen je zo snel mogelijk van een reactie voorzien.

Met vriendelijke groet,

het MyWheels Team`
  },
  {
    key: "Gemeente - Verlegd - NL",
    subject: "Ontvangen (verkeers)boete",
    content: `Beste {{ VOORNAAM }},

Van {{ BEGIN_BOEKING }} tot {{ EIND_BOEKING }} heb jij via MyWheels een auto gehuurd.
Wij hebben zojuist helaas een parkeerboete ontvangen van Gemeente {{ GEMEENTE }} welke gemaakt is tijdens jouw huurperiode.

Wij hebben de Gemeente {{ GEMEENTE }} verzocht om deze boete te verleggen naar jou. Je zult hier t.z.t. bericht van ontvangen vanuit de Gemeente om deze aan hen te voldoen. In de bijlage vind je de boete zoals wij hem hebben ontvangen. MyWheels heeft hiervoor € 10,- administratiekosten bij jou in rekening gebracht die je via www.mywheels.nl/finance kunt betalen.

Mocht je vragen hebben n.a.v. bovenstaande, kun je deze e-mail beantwoorden. We zullen je zo snel mogelijk van een reactie voorzien.

Met vriendelijke groet,

het MyWheels Team`
  },
  {
    key: "Eigen risico in rekening gebracht - NL",
    subject: "Eigen risico",
    content: `Beste {{ VOORNAAM }},

Op {{ DATUM }} heb jij in een auto gehuurd via MyWheels schade gereden.
Deze schade is inmiddels afgehandeld en de verzekering heeft deze schade vergoed.
Er is wel een eigen risico van toepassing voor jou. Die is oorspronkelijk € 500,- maar in jouw rit / reservering verlaagd naar € 250,- euro.

Ik zou je willen vragen dit bedrag via een online betaling aan ons te voldoen. Hiervoor log je in op mywheels.nl, ga je in het menu naar "Financiën" en klik je vervolgens op rijtegoed. Daar kun je jouw openstaande bedrag voldoen.

Mocht je nog vragen hebben n.a.v. deze e-mail, verzoek ik je om deze e-mail te beantwoorden.

Met vriendelijke groet,

het MyWheels Team`
  },
  {
    key: "Tenaamstellingscheck - NL",
    subject: "Tenaamstelling komt niet overeen",
    content: `Beste {{ VOORNAAM }},

Welkom bij MyWheels, leuk dat je lid bent geworden!

Tijdens het aanmelden bij MyWheels en het reserveren van een auto controleren wij alle gegevens. 
Bij deze controle blijkt dat de tenaamstelling van het rekeningnummer waarmee jij een betaling hebt gedaan niet (volledig) overeenkomt met de naam die is opgegeven in jouw account. We hebben de betaling daarom nog nog niet kunnen verwerken. 

Om dit verder voor je te kunnen oppakken, kun je het volgende doen:
- Om je identiteit te kunnen verifiëren, vragen we je per iDEAL 0,01 euro te betalen van een rekening op jouw naam. Zodra dit gelukt is, verwerken we automatisch de betaling van de rit. Dit doe je via de betaalknop in de e-mail die je eerder hebt ontvangen of [klik hier](https://mywheels.nl/vouchers). _Let op! Dit doe je dus met een andere rekening, op jouw naam._
- Betreft het een rekening op naam van een bedrijf? Beantwoord dan deze e-mail met een kopie KvK-uittreksel.
- Betreft het een gezamenlijke rekening? Beantwoord dan deze e-mail met een kopie rijbewijs van de andere rekeninghouder. Of maak alsnog via iDEAL 0,01 euro over van een rekening op jouw naam door [hier te klikken](https://mywheels.nl/vouchers). _(Burgerservicenummer (BSN) mag je uiteraard afschermen als je een kopie rijbewijs stuurt)._

We zien de gegevens graag tegemoet. Alvast bedankt!

Met vriendelijke groet,

het MyWheels Team`
  },
  {
    key: "Auto - Deactivatie ivm hoger risico - NL",
    subject: "Jouw auto is gedeactiveerd",
    content: `Beste {{ VOORNAAM }},

Je biedt jouw auto aan op MyWheels. Vanwege een verhoogd risico op misbruik van jouw auto door huurders, hebben we jouw auto vandaag gedeactiveerd. Jouw auto is daardoor niet meer vindbaar op MyWheels. Hiermee willen we voorkomen dat huurders schade rijden in jouw auto of voor verkeersboetes zorgen.

Mail gerust als je nog vragen hebt.

Met vriendelijke groet,

het MyWheels Team`
  }
]);
