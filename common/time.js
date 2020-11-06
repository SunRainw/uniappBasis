// 用于聊天时间转换
/**
 * 分析
 * 1. 小于5分钟不显示时间
 * 2. 小于凌晨0点： 昨天 时：分
 * 3. 前一天凌晨0点-周一0点： 星期X 时：分
 * 4. 周一0点之前-今年1月1日： “MM月DD日 时：分”
 * 5. 今年之前：“YYYY年MM月DD日 时：分”
 */

// 用于给月日时分只有1位时加0
function formatNumber(num) {
	return num > 10 ? num : `0${num}`
}

// 用于转换一天的时间区间
function formatInterval(hour, minute) {
	if (hour >= 0 && hour < 6) {
		return '凌晨 ' + [hour, minute].map(formatNumber).join(':')
	} else if (hour >= 6 && hour < 12) {
		return '上午 ' + [hour, minute].map(formatNumber).join(':')
	} else if (hour === 12) {
		return '中午 ' + [hour, minute].map(formatNumber).join(':')
	} else if (hour > 12 && hour < 18) {
		return '下午 ' + [hour, minute].map(formatNumber).join(':')
	} else if (hour >= 18 < hour < 24) {
		return '晚上' + [hour, minute].map(formatNumber).join(':')
	}
}

function transTime(timeStamp) {
	return timeStamp.toString().length <= 10 ? timeStamp = timeStamp + "000" : ''
}

export function getTime(timeStamp) {
	timeStamp = parseInt(transTime(timeStamp))
	const date = new Date(timeStamp) // 获取的时间对象
	const nowDate = new Date() // 当前时间对象
	const timeDiff = (nowDate.getTime() - timeStamp) / 1000 // 时间差
	const todaySecond = nowDate.getHours() * 60 * 60 + nowDate.getMinutes() * 60 // 今天的时间(用于判断是是否为今天)
	const nowWeek = nowDate.getDay() // 当前是星期几
	const nowYear = nowDate.getFullYear() // 当前的年份
	const oldYear = date.getFullYear() // 参数时间的年份
	// 参数时间的月、日、时、分
	const oldMonth = formatNumber(date.getMonth())
	const oldDay = formatNumber(date.getDate())
	const oldTime = formatInterval(date.getHours(), date.getMinutes())
	// if (Math.abs(timeDiff) < 300) {
	// 	// 判断间隔是否小于5分钟
	// 	return ""
	// } else 
	if (timeDiff <= todaySecond) {
		// 判断是否为当天（小于当天的秒数）
		return " " + formatInterval(date.getHours(), date.getMinutes())
	} else if (timeDiff <= 86400 + todaySecond && timeDiff > todaySecond) {
		// 判断是否为昨天
		return "昨天 " + formatInterval(date.getHours(), date.getMinutes())
	} else if (timeDiff > 86400 + todaySecond && timeDiff <= 86400 * (nowWeek - 1) + todaySecond) {
		// 判断是否是当前周
		const arr = new Array("日", "一", "二", "三", "四", "五", "六");
		const weekStr = arr[date.getDay()]
		const time = formatInterval(date.getHours(), date.getMinutes())
		return `周${weekStr} ${time}`
	} else if (nowYear > oldYear) {
		// 判断是否为今年
		return `${oldYear}年${oldMonth}月${oldDay}日 ${oldTime}`
	} else {
		return `${oldMonth}月${oldDay}日 ${oldTime}`
	}
}

// 判断时间间隔(数组类型)
export function getShowTime(list, isChat=true, time = "time") {
	for (let i = 0; i < list.length; i++) {
		if (i === 0 || list[i][time] - list[i - 1][time] > 300 || !isChat) {
			list[i].showTime = getTime(list[i][time])
		} else {
			list[i].showTime = ""
		}
	}
	return list
}

// 判断两者时间间隔
export function getEachTime(newTime, oldTime) {
	let n = parseInt(transTime(newTime))
	let o = parseInt(transTime(oldTime))
	if (n - o > 300000) {
		return getTime(newTime)
	} else {
		return ""
	}
}

//根据日期获取星座（传入yyyy-mm-dd）
export function getConstellationByBornDate(bornDate) {
    const month = parseInt(bornDate.substring(5, 7));
    const day = parseInt(bornDate.substring(8, 10));

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "水瓶座";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "双鱼座";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "白羊座";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "金牛座";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
        return "双子座";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "巨蟹座";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "狮子座";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "处女座";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
        return "天秤座";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "天蝎座";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "射手座";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "摩羯座";
    }
    return;
}

//根据日期获取年龄（传入yyyy-mm-dd）
export function getAgeByBornDate(bornDate) {
    const myDate = new Date();
    const month = myDate.getMonth() + 1;
    const day = myDate.getDate();
    const age = myDate.getFullYear() - parseInt(bornDate.substring(0, 4)) - 1;
    if (parseInt(bornDate.substring(5, 7)) < month ||
        parseInt(bornDate.substring(5, 7)) == month && parseInt(bornDate.substring(8, 10)) <= day) {
        age++;
    }
    return age;
}

// 获取指定时间与当前时间的天数差
export function getDayDifference (timesData) {
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    const dateBegin = new Date(timesData.replace(/-/g, "/"));//将-转化为/，使用new Date
    const dateEnd = new Date();//获取当前时间
    const dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    const dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
	return dayDiff
}