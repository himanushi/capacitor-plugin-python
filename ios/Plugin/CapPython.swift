import Foundation

@objc public class CapPython: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
