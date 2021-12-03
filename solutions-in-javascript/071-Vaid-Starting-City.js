function validStartingCity(distances, fuel, mpg) {
  for (let i = 0; i < distances.length; i++) {
    let mileRemain = 0
    for (let j = i; j < distances.length; j++) {
      if (mileRemain < 0) continue

      const idx = j % distances.length
      mileRemain += fuel[idx] * mpg - distances[idx]
    }

    if (mileRemain >= 0) return i
  }

  return -1
}
