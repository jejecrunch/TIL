const date = (start, end) => {
    const res = []
    const sDay = new Date(start),
        eDay = new Date(end)
    while (sDay.getTime() <= eDay.getTime()) {
        let _mon_ = sDay.getMonth() + 1
        _mon_ = _mon_ < 10 ? "0" + _mon_ : _mon_
        let _day_ = sDay.getDate()
        _day_ = _day_ < 10 ? "0" + _day_ : _day_
        res.push(sDay.getFullYear().toString().slice(-2) + _mon_ + _day_ + "")
        sDay.setDate(sDay.getDate() + 1)
    }
    console.log(res)
    return res
}

const prefix = {
    TIL: "today",
    WIL: "weekly",
    MIL: "monthly",
}

exports.TILList = date("2022-09-24", "2022-09-25").map((v) => prefix.TIL + "/" + v + ".md")

exports.WILList = []

exports.MILList = []
