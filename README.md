# git test sandbox
 
$$Lux= \frac{new + old*3}{4}$$

\f$\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\f$.


plus-minus sign    

plain text: ± (renders properly in PDF, does in Word)    
HTML: &plusmn; (renders properly in PDF, does in Word)    
LaTeX: $\pm$ (doesn't render properly in PDF, does in Word)   


## Infomeldungen
 Bezeichnung -> Beschreibung                                                       | Rücksetzung/nicht aktiv                                | Bitposition 
 -- | - | - 
 Keine Standardwerte -> Die Einstellungen weichen von den Standardeinstellungen ab | Information wurde nicht Übernommen                     | 0          
 Gerät wurde in Testbetrieb versetzt  | nach verlassen des Testmodus erlischt auch die Meldung | 1          
 Gerät wurde in BNK-Modus versetzt                                                 | Erlischt bei Rückkehr in den Normalmodus               | 2           
 Gerät läuft nicht mit 100% -> Dimmung Aktiv                                       | Erlischt bei Rückkehr in den Normalmodus               | 3           

```graphviz
digraph finite_state_machine {
    rankdir=LR;
    size="8,5"

    node [shape = doublecircle]; S;
    node [shape = point ]; qi

    node [shape = circle];
    qi -> S;
    S  -> q1 [ label = "a" ];
    S  -> S  [ label = "a" ];
    q1 -> S  [ label = "a" ];
    q1 -> q2 [ label = "ddb" ];
    q2 -> q1 [ label = "b" ];
    q2 -> q2 [ label = "b" ];
}
```
