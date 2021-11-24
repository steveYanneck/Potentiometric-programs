const volumes = [1, 5, 12.5, 15, 20, 25, 26, 30]
//formule E = k - (0.0592/n)*pH
// k = E + 0,0592/n*log

const energy = 1.52
const n = 1
const concentration = 0.002
const k = energy + (0.0592/n) * Math.log(concentration)

for(volume of volumes) {
    const potential = k + (0.0592/5) * Math.log(1)
    console.log(`Volume: ${volume}, Potential: ${potential}`)
}