       
       
       document.querySelector('button').onclick = change;
       
        let counter = 0;
        function change(){
        counter++;
        document.querySelector('#counter').textContent = counter;

    }