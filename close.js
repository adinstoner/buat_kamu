// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
      title: 'Apakah Kamu  Merasa Senang?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya',
      cancelButtonText: 'Tidak',
      responseText:'yah kamu tidak senangg'
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector('.lagu').play();
        animationTimeline();
      } else {
        responseText.textContent = '';
      }
    });
  });
  
  // kirim balasan whatsap
  function sendMessage() {
    var message = document.getElementById("message").value;
    var phoneNumber = "6282262941556"; // Ganti dengan nomor WhatsApp tujuan
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  }
  