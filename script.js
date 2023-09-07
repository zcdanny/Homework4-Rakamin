// Fungsi untuk mendapatkan nomor acak antara 1 dan 50
const getRandomNumber = () => {
    return Math.floor(Math.random() * 50 + 1);
  };
  
  // Inisialisasi array originalNumbers dengan 100 angka acak
  const originalNumbers = [];
  for (let idx = 0; idx < 100; idx++) {
    originalNumbers.push(getRandomNumber());
  }
  
  // Inisialisasi array arrayOdd dan arrayEven untuk angka genap dan ganjil
  const arrayOdd = [];
  const arrayEven = [];
  
  // Memisahkan angka ganjil dan genap dari originalNumbers ke dalam array yang sesuai
  originalNumbers.forEach((number, idx) => {
    if (idx % 2 === 0) arrayEven.push(number);
    else arrayOdd.push(number);
  });
  
  // Fungsi rekursif untuk mencari nilai minimum dalam array
  const getMinNumber = (numbers, start, end) => {
    if (start === end) return numbers[start];
  
    const middleIndex = Math.floor((start + end) / 2);
  
    const left = getMinNumber(numbers, start, middleIndex);
    const right = getMinNumber(numbers, middleIndex + 1, end);
  
    if (left > right) {
      return right;
    }
  
    return left;
  };
  
  // Fungsi rekursif untuk mencari nilai maksimum dalam array
  const getMaxNumber = (numbers, start, end) => {
    if (start === end) return numbers[start];
  
    const middleIndex = Math.floor((start + end) / 2);
  
    const left = getMaxNumber(numbers, start, middleIndex);
    const right = getMaxNumber(numbers, middleIndex + 1, end);
  
    if (left < right) {
      return right;
    }
  
    return left;
  };
  
  // Fungsi rekursif untuk menghitung total angka dalam array
  const getTotal = (numbers, length) => {
    if (length <= 0) return 0;
  
    return numbers[length - 1] + getTotal(numbers, length - 1);
  }
  
  // Fungsi untuk menghitung rata-rata dari angka dalam array
  const getMean = (numbers) => getTotal(numbers, numbers.length) / numbers.length;
  
  // Menghitung nilai minimum, maksimum, total, dan rata-rata dari arrayOdd dan arrayEven
  const minValueArrayOdd = getMinNumber(arrayOdd, 0, arrayOdd.length);
  const maxValueArrayOdd = getMaxNumber(arrayOdd, 0, arrayOdd.length);
  const totalValueArrayOdd = getTotal(arrayOdd, arrayOdd.length);
  const meanArrayOdd = getMean(arrayOdd);
  
  const minValueArrayEven = getMinNumber(arrayEven, 0, arrayEven.length);
  const maxValueArrayEven = getMaxNumber(arrayEven, 0, arrayEven.length);
  const totalValueArrayEven = getTotal(arrayEven, arrayEven.length);
  const meanArrayEven = getMean(arrayEven);
  
  // Fungsi untuk membandingkan nilai antara arrayOdd dan arrayEven
  const compareValue = (valueArrOdd, valueArrEven, name) => {
    if (valueArrOdd > valueArrEven) {
      return `(${valueArrOdd} > ${valueArrEven}) ${name} value dari array ganjil lebih besar daripada array genap`;
    }
  
    if (valueArrOdd < valueArrEven) {
      return `(${valueArrOdd} < ${valueArrEven}) ${name} value dari array genap lebih besar daripada array ganjil`;
    }
  
    if (valueArrOdd !== valueArrEven) {
      return `(${valueArrOdd} !== ${valueArrEven}) ${name} value dari array ganjil tidak sama dengan array genap`;
    }
  
    return `(${valueArrOdd} === ${valueArrEven}) ${name} value dari array genap sama besar dengan array ganjil`;
  }
  
  // Menampilkan hasil perbandingan antara arrayOdd dan arrayEven
  console.log(`Array asli`);
  console.log(originalNumbers);
  
  console.log('\n================================\n');
  
  console.log(`Array index genap dengan total panjang ${arrayEven.length}`);
  console.log(arrayEven);
  
  console.log('\n================================\n');
  
  console.log(`Array index ganjil dengan total panjang ${arrayOdd.length}`);
  console.log(arrayOdd);
  
  console.log('\n================================\n');
  
  // Menampilkan hasil minimum, maksimum, total, dan rata-rata dari arrayOdd dan arrayEven
  console.table({
    'array ganjil': {
      min: minValueArrayOdd,
      max: maxValueArrayOdd,
      total: totalValueArrayOdd,
      mean: meanArrayOdd
    },
    'array genap': {
      min: minValueArrayEven,
      max: maxValueArrayEven,
      total: totalValueArrayEven,
      mean: meanArrayEven
    }
  });
  
  // Menampilkan perbandingan antara nilai-nilai arrayOdd dan arrayEven
  console.log(compareValue(minValueArrayOdd, minValueArrayEven, 'minimal'));
  console.log(compareValue(maxValueArrayOdd, maxValueArrayEven, 'maksimal'));
  console.log(compareValue(totalValueArrayOdd, totalValueArrayEven, 'total'));
  console.log(compareValue(meanArrayOdd, meanArrayEven, 'rata-rata'));
  