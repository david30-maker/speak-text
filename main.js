const btn = document.querySelector('button');
        const text = document.querySelector('textarea');
        btn.addEventListener('click', () => {
            speechSynthesis.speak(
                new SpeechSynthesisUtterance(text.value)
            );
        });  