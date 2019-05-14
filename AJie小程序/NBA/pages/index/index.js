//index.js
Page({
  data: {
    date: [
      { id: "d22", time: "05月15日" },
      { id: "d23", time: "05月13日" },
      { id: "d24", time: "05月24日" },
      { id: "d25", time: "06月07日" }
    ],
    current: 0,
    result: [
      {
        id: "d22",
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/new/22.png",
        leftgrade: 119,
        leftname: "开拓者",
        rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
        rightgrade: 120,
        rightname: "勇士"
      },
      {
        id: "d23",
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/20.png",
        leftgrade: 90,
        leftname: "76人",
        rightteam:
          "https://img1.gtimg.com/sports/pics/hv1/133/21/2268/147482188.png",
        rightgrade: 92,
        rightname: "猛龙"
      },
      {
        id: "d24",
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
        leftgrade: 118,
        leftname: "勇士",
        rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/10.png",
        rightgrade: 113,
        rightname: "火箭"
      },
      {
        id: "d25",
        leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
        leftgrade: 95,
        leftname: "勇士",
        rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/15.png",
        rightgrade: 89,
        rightname: "雄鹿"
      }
    ],
    agenda: {}
  },
  turnLeft() {
    let { current } = this.data;
    if (current <= 0) return false;
    current--;
    this.setData({
      current
    });
    this.handleAgendaDate();
  },
  turnRight() {
    let { current, date } = this.data;
    if (current >= date.length - 1) return false;
    current++;
    this.setData({
      current
    });
    this.handleAgendaDate();
  },
  handleAgendaDate() {
    let { current, result, date } = this.data;
    let { id } = date[current];
    const agenda = result.find(item => id === item.id);
    if (agenda) {
      this.setData({ agenda });
    }
  },
  onLoad: function() {
    this.handleAgendaDate();
  }
});
