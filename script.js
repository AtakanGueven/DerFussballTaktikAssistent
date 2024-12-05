function analyzeGame() {
    const formation = document.getElementById('formation').value;
    const style = document.getElementById('style').value;
    const weather = document.getElementById('weather').value;
    const surface = document.getElementById('surface').value;

    let recommendedFormation = "";
    let strategy = "";
    let tips = "";

    // Empfehlungen basierend auf der Formation und dem Spielstil
    if (formation === "4-3-3") {
        if (style === "tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze kurze Pässe und Bewegung, um die gegnerische Abwehr zu überwinden. Halte den Ball in Bewegung, um Lücken zu schaffen.";
            tips = "Setze die Flügelspieler aktiv ein, um Platz im Zentrum zu schaffen und den Ballbesitz zu erhöhen.";
        } else if (style === "positional play") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze Raum und Ballbesitz. Die Spieler sollten sich optimal positionieren, um Überzahlsituationen zu schaffen.";
            tips = "Bewege die Spieler ständig, um Räume zu schaffen und die gegnerische Abwehr zu destabilisieren.";
        } else if (style === "vertikal tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze schnelle vertikale Pässe und achte darauf, dass die Spieler immer in Bewegung bleiben. Dies hilft, die Defensive des Gegners zu durchbrechen.";
            tips = "Halte das Tempo hoch und nutze die Schnelligkeit deiner Spieler.";
        } else if (style === "gegenpressing") {
            recommendedFormation = "4-1-4-1";
            strategy = "Versuche, den Ball sofort zurückzugewinnen, sobald er verloren geht. Drucke den Gegner aktiv, um Ballgewinne zu erzielen.";
            tips = "Halte die Defensive stabil und nutze die Aggressivität deiner Mittelfeldspieler, um Druck auszuüben.";
        } else if (style === "catenaccio") {
            recommendedFormation = "5-4-1";
            strategy = "Setze auf eine kompakte Defensive und warte auf Kontersituationen. Die Defensive muss gut organisiert sein.";
            tips = "Nutze schnelle Konter, um die gegnerische Defensive zu überraschen.";
        } else if (style === "park the bus") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und kompakt, um den Gegner zu stoppen. Warte auf Chancen, um schnell umzuschalten.";
            tips = "Nutze lange Bälle für schnelle Konterangriffe.";
        } else if (style === "schnelles konterspiel") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Schnelligkeit deiner Flügelspieler für schnelle Angriffe. Halte die Defensive stabil, um Kontersituationen zu schaffen.";
            tips = "Nutze den Raum, um schnell in die Offensive umzuschalten.";
        } else if (style === "gegenpressing mit ballbesitz") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze die Überzahl im Mittelfeld, um den Ball zu halten und gleichzeitig Druck auf den Gegner auszuüben. Setze die Spieler ein, um das Spiel zu kontrollieren.";
            tips = "Halte den Ball in Bewegung, um den Druck hoch zu halten.";
        }
    } else if (formation === "3-4-3") {
        if (style === "tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze schnelles Kurzpassspiel, um die gegnerische Abwehr zu durchbrechen. Die Bewegungen sollten synchronisiert sein.";
            tips = "Halte die Flügelspieler aktiv, um Überzahlsituationen im Zentrum zu schaffen.";
        } else if (style === "positional play") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Breite des Feldes und halte die Spieler in optimaler Position, um Räume zu schaffen.";
            tips = "Bewege die Spieler, um die gegnerische Defensive zu destabilisieren.";
        } else if (style === "vertikal tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Fokussiere dich auf schnelle vertikale Pässe, um die gegnerische Defensive zu durchbrechen.";
            tips = "Halte das Tempo hoch und spiele dynamisch.";
        } else if (style === "gegenpressing") {
            recommendedFormation = "4-1-4-1";
            strategy = "Nutze intensives Pressing, um den Ball sofort zurückzugewinnen, wenn er verloren geht.";
            tips = "Halte die Defensive kompakt, um den Druck aufrechtzuerhalten.";
        } else if (style === "catenaccio") {
            recommendedFormation = "5-4-1";
            strategy = "Setze auf eine starke Defensive und warte auf Kontersituationen.";
            tips = "Nutze schnelle Spieler, um die gegnerische Defensive zu überraschen.";
        } else if (style === "park the bus") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und kompakt, um den Gegner zu stoppen und auf Kontersituationen zu warten.";
            tips = "Nutze schnelle Spieler für Konterangriffe.";
        } else if (style === "schnelles konterspiel") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Schnelligkeit deiner Flügelspieler für schnelle Angriffe. Halte die Defensive stabil, um Kontersituationen zu schaffen.";
            tips = "Nutze den Raum, um schnell in die Offensive umzuschalten.";
        } else if (style === "gegenpressing mit ballbesitz") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze Überzahl im Mittelfeld für Ballbesitz und Druck auf den Gegner. Halte den Ball in Bewegung.";
            tips = "Nutze den Raum, um die Defensive des Gegners zu destabilisieren.";
        }
    } else if (formation === "4-2-4") {
        if (style === "tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze Kombinationen, um die gegnerische Defensive zu durchbrechen. Halte den Ball in Bewegung.";
            tips = "Bewege die Flügelspieler oft, um Lücken zu schaffen.";
        } else if (style === "positional play") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze Raum und Ballbesitz. Halte die Spieler optimal positioniert.";
            tips = "Bewege die Spieler ständig, um Räume zu schaffen.";
        } else if (style === "vertikal tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Fokussiere dich auf schnelle, vertikale Pässe, um die Defensive zu durchbrechen.";
            tips = "Halte das Tempo hoch und nutze die Schnelligkeit.";
        } else if (style === "gegenpressing") {
            recommendedFormation = "4-1-4-1";
            strategy = "Versuche, den Ball sofort zurückzugewinnen, wenn er verloren geht. Drucke den Gegner aktiv.";
            tips = "Nutze eine kompakte Defensive.";
        } else if (style === "catenaccio") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und warte auf Kontersituationen.";
            tips = "Nutze schnelle Konter, um die gegnerische Defensive zu überraschen.";
        } else if (style === "park the bus") {
            recommendedFormation = "5-4-1";
            strategy = "Setze auf eine starke Defensive und warte auf Kontersituationen.";
            tips = "Nutze schnelle Spieler, um die gegnerische Defensive zu überraschen.";
        } else if (style === "schnelles konterspiel") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Schnelligkeit deiner Flügelspieler für schnelle Angriffe. Halte die Defensive stabil.";
            tips = "Nutze den Raum, um schnell in die Offensive umzuschalten.";
        } else if (style === "gegenpressing mit ballbesitz") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze die Überzahl im Mittelfeld für Ballbesitz und Druck auf den Gegner.";
            tips = "Halte den Ball in Bewegung und nutze die Räume.";
        }
    } else if (formation === "4-4-2") {
        if (style === "tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze kurze Pässe und Bewegung, um die gegnerische Abwehr zu überwinden.";
            tips = "Halte den Ball in Bewegung, um Lücken zu schaffen.";
        } else if (style === "positional play") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze Raum und Ballbesitz. Halte die Spieler optimal positioniert.";
            tips = "Bewege die Spieler ständig, um Räume zu schaffen.";
        } else if (style === "vertikal tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze schnelle, vertikale Pässe, um die Defensive zu durchbrechen.";
            tips = "Halte das Tempo hoch und spiele dynamisch.";
        } else if (style === "gegenpressing") {
            recommendedFormation = "4-1-4-1";
            strategy = "Setze auf intensives Pressing, um den Ball sofort zurückzugewinnen.";
            tips = "Halte die Defensive kompakt.";
        } else if (style === "catenaccio") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und warte auf Kontersituationen.";
            tips = "Nutze schnelle Konter.";
        } else if (style === "park the bus") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und kompakt.";
            tips = "Nutze schnelle Spieler für Konter.";
        } else if (style === "schnelles konterspiel") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Schnelligkeit deiner Flügelspieler für schnelle Angriffe.";
            tips = "Halte die Defensive stabil, um Kontersituationen zu schaffen.";
        } else if (style === "gegenpressing mit ballbesitz") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze die Überzahl im Mittelfeld für Ballbesitz und Druck auf den Gegner.";
            tips = "Halte den Ball in Bewegung.";
        }
    } else if (formation === "5-3-2") {
        if (style === "tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze schnelles Kurzpassspiel, um die gegnerische Abwehr zu durchbrechen.";
            tips = "Halte die Flügelspieler aktiv.";
        } else if (style === "positional play") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Breite des Feldes und halte die Spieler in optimaler Position.";
            tips = "Bewege die Spieler, um die gegnerische Defensive zu destabilisieren.";
        } else if (style === "vertikal tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Fokussiere dich auf schnelle vertikale Pässe.";
            tips = "Halte das Tempo hoch.";
        } else if (style === "gegenpressing") {
            recommendedFormation = "4-1-4-1";
            strategy = "Nutze intensives Pressing, um den Ball sofort zurückzugewinnen.";
            tips = "Halte die Defensive kompakt.";
        } else if (style === "catenaccio") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und warte auf Kontersituationen.";
            tips = "Nutze schnelle Konter.";
        } else if (style === "park the bus") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und kompakt.";
            tips = "Nutze schnelle Spieler für Konter.";
        } else if (style === "schnelles konterspiel") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Schnelligkeit deiner Flügelspieler für schnelle Angriffe.";
            tips = "Halte die Defensive stabil.";
        } else if (style === "gegenpressing mit ballbesitz") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze die Überzahl im Mittelfeld für Ballbesitz und Druck auf den Gegner.";
            tips = "Halte den Ball in Bewegung.";
        }
    } else if (formation === "4-1-4-1") {
        if (style === "tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze kurze Pässe und Bewegung, um die gegnerische Abwehr zu überwinden.";
            tips = "Halte den Ball in Bewegung.";
        } else if (style === "positional play") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze Raum und Ballbesitz.";
            tips = "Halte die Spieler optimal positioniert.";
        } else if (style === "vertikal tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze schnelle vertikale Pässe.";
            tips = "Halte das Tempo hoch.";
        } else if (style === "gegenpressing") {
            recommendedFormation = "4-1-4-1";
            strategy = "Nutze intensives Pressing.";
            tips = "Halte die Defensive kompakt.";
        } else if (style === "catenaccio") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und warte auf Kontersituationen.";
            tips = "Nutze schnelle Konter.";
        } else if (style === "park the bus") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und kompakt.";
            tips = "Nutze schnelle Spieler für Konter.";
        } else if (style === "schnelles konterspiel") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Schnelligkeit deiner Flügelspieler für schnelle Angriffe.";
            tips = "Halte die Defensive stabil.";
        } else if (style === "gegenpressing mit ballbesitz") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze die Überzahl im Mittelfeld für Ballbesitz und Druck auf den Gegner.";
            tips = "Halte den Ball in Bewegung.";
        }
    } else if (formation === "3-5-2") {
        if (style === "tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze schnelle Kombinationen und Halte den Ball in Bewegung.";
            tips = "Bewege die Spieler ständig.";
        } else if (style === "positional play") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze den Raum auf dem Feld und halte die Spieler optimal positioniert.";
            tips = "Nutze die Breite des Spielfelds.";
        } else if (style === "vertikal tiki taka") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze schnelle vertikale Pässe.";
            tips = "Halte das Tempo hoch.";
        } else if (style === "gegenpressing") {
            recommendedFormation = "4-1-4-1";
            strategy = "Nutze intensives Pressing.";
            tips = "Halte die Defensive kompakt.";
        } else if (style === "catenaccio") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und warte auf Kontersituationen.";
            tips = "Nutze schnelle Konter.";
        } else if (style === "park the bus") {
            recommendedFormation = "5-4-1";
            strategy = "Spiele defensiv und kompakt.";
            tips = "Nutze schnelle Spieler für Konter.";
        } else if (style === "schnelles konterspiel") {
            recommendedFormation = "4-3-3";
            strategy = "Nutze die Schnelligkeit deiner Flügelspieler für schnelle Angriffe.";
            tips = "Halte die Defensive stabil.";
        } else if (style === "gegenpressing mit ballbesitz") {
            recommendedFormation = "4-2-3-1";
            strategy = "Nutze die Überzahl im Mittelfeld für Ballbesitz und Druck auf den Gegner.";
            tips = "Halte den Ball in Bewegung.";
        }
    }

    // Wetterbedingungen und Untergrund hinzufügen
    let weatherAdvice = "";
    let surfaceAdvice = "";

    if (weather === "Regen") {
        weatherAdvice = "Bei Regen kann der Ball schneller rollen. Achte darauf, dass die Spieler den Ball sicher kontrollieren.";
    } else if (weather === "Schnee") {
        weatherAdvice = "Schnee kann die Bewegungen der Spieler einschränken. Achte darauf, die Spieler auf die veränderten Bedingungen vorzubereiten.";
    } else if (weather === "Wind") {
        weatherAdvice = "Wind kann das Spiel beeinflussen. Halte die Spieler dazu an, präzise Pässe zu spielen.";
    }

    if (surface === "Kunstrasen") {
        surfaceAdvice = "Auf Kunstrasen kann der Ball schneller rollen. Achte darauf, dass die Spieler sich an die schnelleren Bewegungen anpassen.";
    } else if (surface === "Sand") {
        surfaceAdvice = "Sand kann die Bewegungen der Spieler verlangsamen. Achte darauf, dass die Spieler an den Widerstand gewöhnt sind.";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Empfohlene Formation: ${recommendedFormation}</h2>
        <h3>Strategie:</h3>
        <p>${strategy}</p>
        <h3>Tipps:</h3>
        <p>${tips}</p>
        <h3>Wetterhinweis:</h3>
        <p>${weatherAdvice}</p>
        <h3>Untergrundhinweis:</h3>
        <p>${surfaceAdvice}</p>
    `;
}

document.getElementById('analyze').addEventListener('click', analyzeGame);
