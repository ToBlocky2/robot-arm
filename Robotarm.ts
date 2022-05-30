basic.forever(function () {
    servos.P0.setAngle(servo1)
    servos.P1.setAngle(servo2)
})
namespace Robot_arm {
    /**
     * Move the arm up
     */
    //% block
    export function move_arm_up(n: number): void {
        servo1 = servo1 + n
    }
    /**
     * Move the arm down
     */
    //% block
    export function move_arm_down(n: number): void {
        servo1 = servo1 - n
    }
    /**
     * Move the arm left
     */
    //% block
    export function move_arm_left(n: number): void {
        servo2 = servo2 + n
    }
    /**
     * Move the arm right
     */
    //% block
    export function move_arm_right(n:number): void {
        servo2 = servo2 - n
    }
}
let servo1 = 180
let servo2 = 180