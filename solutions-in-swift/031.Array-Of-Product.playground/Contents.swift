import Foundation

// Alternative Approach: Time = O(n) | Space = O(n)
func arrayOfProducts(_ array: [Int]) -> [Int] {
    var leftArray = [Int](repeating: 1, count: array.count)
    var rightArray = [Int](repeating: 1, count: array.count)
    var ans = [Int]()

    var leftProduct = 1
    for i in 0..<array.count {
        leftArray[i] = leftProduct
        leftProduct *= array[i]
    }
    
    var rigthProduct = 1
    for i in stride(from: array.count - 1, through: 0, by: -1){
        rightArray[i] = rigthProduct
        rigthProduct *= array[i]
    }
    
    for i in 0..<leftArray.count {
        ans.append(leftArray[i] * rightArray[i])
    }
    
    return ans
}


// Division Approach: Time = O(n) | Space = O(n)
//func arrayOfProducts(_ array: [Int]) -> [Int] {
//    let totalProduct = array.reduce(1) { $0 * $1 }
//    var ans = [Int]()
//    array.forEach { ans.append(totalProduct / $0) }
//    return ans
//}

// Brute Force: Time = O(n^2) | Space = O(n)
//func arrayOfProducts(_ array: [Int]) -> [Int] {
//    var ans = [Int]()
//    for i in 0..<array.count {
//        var temp = 1
//        for j in 0..<array.count {
//            if j == i { continue }
//            temp = temp * array[j]
//        }
//        ans.append(temp)
//    }
//    return ans
//}

print(arrayOfProducts([5, 1, 4, 2]))
