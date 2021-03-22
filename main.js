const moreBtn = document.querySelector('.info .metadata .morebtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});

function likebtnColor(self){
  var target = document.querySelector('#likebtn');
  if(self.value === 'unlike'){
    target.style.color = '#045fd4';
    self.value = 'like';
  } else{
      target.style.color = '#9d9d9d';
      self.value = 'unlike';
    }
  }

  function hatebtnColor(self){
    var target = document.querySelector('#hatebtn');
    if(self.value === 'unhate'){
      target.style.color = '#045fd4';
      self.value = 'hate';
    } else{
        target.style.color = '#9d9d9d';
        self.value = 'unhate';
      }
    }
