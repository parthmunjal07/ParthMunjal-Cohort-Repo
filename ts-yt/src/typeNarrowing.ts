function getChai(kind: string | number){
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`
    }
    return `Chai Order : ${kind}`
}

function serveChai(msg?: string){
    if (msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

function orderChai(size: "small" | "medium" | "large" | number){
    if (size === "small") {
        return `Small cutting Chai`
    }
    if (size === "medium" || size === "large") {
        return `make extra Chai`
    }

    return `chai order #${size}`
}

class KulhadChai {
    serve(){
        return `Serving Kulhad Chai`
    }
}
class Cutting {
    serve(){
        return `Serving cutting Chai`
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai){
        return chai.serve()
    }
    if (chai instanceof Cutting){
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string,
    sugar: number
}