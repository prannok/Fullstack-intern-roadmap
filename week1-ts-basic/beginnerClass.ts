class Student {
  name: string = "";
  score: number = 0;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }

  showInfo() {
    console.log(`นักเรียนชื่อ ${this.name} ได้คะแนน ${this.score}`);
  }
}

const student1 = new Student("ธีรพัฒน์ พรานนก", 65);
student1.showInfo();
