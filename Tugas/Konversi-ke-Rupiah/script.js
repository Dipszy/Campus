const exchangeRatesToRupiah = {
    USD: 9915,   
    SGD: 13472,  
    MYR: 872,    
    JPY: 120,    
    EUR: 15888,  
    SAR: 3594   
  };
  
  function convertCurrencyToRupiah() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    const rate = exchangeRatesToRupiah[currency];
  
    if (isNaN(amount) || amount <= 0) {
      openModal("Masukkan jumlah yang valid.");
      return;
    }
  
    const convertedAmount = (amount * rate).toLocaleString();
    openModal(`${amount.toLocaleString()} ${currency} = ${convertedAmount} Rupiah`);
  }
  
  function openModal(message) {
    const modal = document.getElementById('resultModal');
    document.getElementById('modalResult').innerText = message;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
  }
  