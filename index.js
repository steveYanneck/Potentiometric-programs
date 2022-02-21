const extinction = 0.388

const calibration = 0.0349 //absorptie bij 1ppm

//extinction = K*l*c (lambert beer)

const K = (0.01 * 0.001) / calibration

const sampleConcentration = (K * 0.01) / extinction

console.log(`De concentratie is ${sampleConcentration * 1000}`)