/**
 * 
 * @param {string|number} data 
 * @returns {string|number}
 */
module.exports = (data) => {
    if(typeof data === "number"){
        if(data < 1000) return `${data} milliseconds`
        data /= 1000
        if(data < 60) return `${data} seconds`
        else if(data >= 86400){
            let reste = data % 86400
            let principal = (data - reste) / 86400
            return `${principal} ${principal === 1 ? "day" : "days"} ${reste !== 0 ? `and ${Math.round(reste / 60 / 60)} ${Math.round(reste / 60 / 60) === 1 ? "hour" : "hours"}` : ""}`
        }
        else if(data >= 3600){
            let reste = data % 3600
            let principal = (data - reste) / 3600
            return `${principal} ${principal === 1 ? "hour" : "hours"} ${reste !== 0 ? `and ${Math.round(reste / 60)} ${Math.round(reste / 60) === 1 ? "minute" : "minutes"}` : ""}`
        }
        else if(data >= 60){
            let reste = data % 60
            let principal = (data - reste) / 60
            return `${principal} ${principal === 1 ? "minute" : "minutes"} ${reste !== 0 ? `and ${Math.round(reste)} ${Math.round(reste) === 1 ? "second" : "seconds"}` : ""}`
        }else return NaN
    }
    else if(typeof data === "string"){
        let type = data.split("").filter(str => isNaN(str))
        if(type[1] || !type[0]) return NaN
        switch(type[0]){
            case("s"):
                return data.slice(0, -1) * 1000
            break;
            case("m"):
                return data.slice(0, -1) * 1000 * 60
            break;
            case("h"):
                return data.slice(0, -1) * 1000 * 60 * 60
            break;
            case("d"):
                return data.slice(0, -1) * 1000 * 60 * 60 * 24
            break;
            default:
                return NaN
            break;
        }
    }else return NaN
}

/**
 * 
 * @param {number} seconds 
 * @returns {string}
 */
module.exports.music = (seconds) => {
    if(isNaN(seconds)) return NaN
    let minute = 0
    let heure = 0
    let second = seconds
    if(seconds > 60){
        do{
            seconds = seconds - 60
            second = second - 60
            minute = minute + 1
                    
        }while(seconds > 60 || seconds === 60)
        if(minute > 60){
            let minutes = minute
            do{
                minute = minute - 60
                minutes = minutes - 60
                heure = heure + 1
                
            }while(minute > 60 || minute === 60)
            if(second < 10) second = "0" + second.toString()
            else if(second.toString().length === 1) second =  second.toString() + "0"
            return `${heure}H ${minutes}m ${second}s`
        }else{
            if(second < 10) return `${minute}.0${second} minutes`
            else if(second.toString().length === 1) return `${minute}.${second}0 minutes `
            else return `${minute}.${second} minutes`
        }
    }else return `${Number(seconds)} secondes`
}

exports.version = require("./package.json").version