/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    let sPointer = s.length - 1;
    let tPointer = t.length - 1;
    
    let sBPC = 0; //Backspace counter for S
    let tBPC = 0; //Backspace counter for T
    
    while(true)
    {
        //Count backspaces and move pointer if character should be removed
        while(sPointer >= 0 && (s[sPointer] == '#' || sBPC > 0))
        {
            if(s[sPointer] == '#')
                sBPC++;
            else
            {
                sBPC--;     
            }
            
            sPointer -= 1;
        }
             
        //Count backspaces and move pointer if character should be removed
        while(tPointer >= 0 && (tBPC > 0 || t[tPointer] == '#'))
        {
            if(t[tPointer] == '#')
                tBPC++;
            else
                tBPC--;
            tPointer--;
        }
        
        let sValid = (sPointer >= 0) ? s[sPointer] : null;
        let tValid = (tPointer >= 0) ? t[tPointer] : null;
        tPointer--;
        sPointer--;
        
        //Both have reached end successfully
        if(tValid == null && sValid == null)
        {
            return true;
        }
           
        //Characters are not the same, then return false
        if(tValid != sValid)
        {
            return false;
        } 
    } 
};