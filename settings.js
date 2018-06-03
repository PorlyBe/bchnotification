const settings = {

    // Bitcoin cash cashaddr. must be prepended with 'bitcoincash:'
    cashaddr: "bitcoincash:qp8kqqcnklpfhk2vz539cqq3htw2g0sq0qmuaugn0k",
    
    // "full", "bits", "sats" use "full" for full BCH units "bits" for 100 sats, or "sats" to show satoshis
    units: "full",
    
     // set to true to show random transactions 
    testmode: true,

    // play sound with donation
    sound: true, 
    
    // notification settings
    notification: {

        //duration in milisecons (aka 4000 = 4s)
        duration: 4000, 
        
        // name, hex (#FFF) or rgb ( rgb(0,0,0,0) ) value 
        color: "red", 

        // font size in pixels
        size: "38", 

        // choose font from - https://fonts.google.com/
        font: 'Montserrat' 
    }
};