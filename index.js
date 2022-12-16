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

exports.version = require("./package.json").version