const settings = {

    // Bitcoin cash cashaddr. must be prepended with 'bitcoincash:'
    cashaddr: "bitcoincash:qp8kqqcnklpfhk2vz539cqq3htw2g0sq0qmuaugn0k",
    
    // "full", "bits", "sats"
    units: "full",
    
     // set to true to show random transactions 
    testmode: true,

    // play sound with donation
    sound: true, 
    
    // notification settings
    notification: {

        // donation message. leave blank if no message wanted
        message: "",

        //duration in milisecons (aka 4000 = 4s)
        duration: 4000, 
        
        // name (eg "red"), hex (eg "#FFF") or rgb (eg "rgb(0,0,0,0)")
        color: "red", 

        // font size in pixels
        size: "38", 

        // choose font from - https://fonts.google.com/
        font: "Montserrat"
    }
};