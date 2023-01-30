function milesToKm(miles) {
    const km = miles*1.609;
    return km;
}
const dhakaToNsdM = 22;
const dhakaToNsdKM = milesToKm(dhakaToNsdM);
console.log("Dhaka to NSD", dhakaToNsdKM);