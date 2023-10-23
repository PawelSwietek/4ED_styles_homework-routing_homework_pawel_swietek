# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Praca domowa - Stylowanie w React

Setup:
Adres repozytorium - https://github.com/DEVSTOCK-PL/4ED_styles_homework
Widoki - https://www.figma.com/file/v6ia15KchK6JX0vZb6lTni/styles_homework?type=design&node-id=0-1&mode=design&t=QXcFg7hVOuTAADIl-0
dokumentacja styled-components - https://styled-components.com/docs

Merging Strategy:

1. klonujemy repozytorium za pomocą 'git clone' i pamiętamy o przejściu do naszego katalogu z projektem 'cd twoje-repo', lub otwieramy folder visualem
2. tworzymy własny branch, możemy zrobić to klikając w menu branchy w lewym dolnym rogu visuala lub za pomocą konsoli 'git checkout -b nazwa-brancha', nazwa brancha według templatki 'styles_homework_imię_nazwisko'
3. w folderze z projektem używamy terminala do instalacji zależności i paczek za pomocą komendy'npm i'
4. wprowadzamy zmiany w kodzie, które potem są widoczne w source control (git ikonka w menu po lewej)
5. wysyłamy zmmiany na serwer przyciskiem "publish branch" w source control lub w konsoli za pomocą 'git push origin nazwa-brancha'
6. jeśli kontynuujemy pracę, możemy commitować kolejne zmiany na nasz opublikowany branch przyciskiem Sync Changes lub w konsoli za pomocą 'git commit -m "opis zmian"'
7. Gdy skończymy musimy wejść na repozytorium i zrobić pull request do maina: - otwórz repo na GH i kliknij Pull requests na pasku - kliknij New pull request i wybierz base: main i compare: nazwa-brancha - kliknij Create pull request

   Założenia zadania:

8. Celem zadania jest odwzorowanie widoków z linku - jest to landing page organizacji ekologicznej.
9. założenia:
   - metodologia stylowania jaką przyjmujemy to styled-components
   - trzeba we własnym zakresie zrobić research dotyczący użycia media queries
   - widok musi być responsywny i uwzględniać urządzenia mobilne - przykładowe breakpointy:
     - 640px
     - 768px
     - 1024px
     - 1280px
     - 1536px
   - osoby chętne mogą wybrać sobie komponenty dla których zastosują inną metodologię, np. modules.css lub tailwind
   - praca musi być napisana zgodnie z najważniejszymi konwencjami React
     - każdy komponent powinien mieć jedno zadanie - jeśli się rozrasta, warto go podzielić
     - porządek w folderach - nie ma sensu przechowywać kilkudziesięciu plików JSX w folderze components, rozdzielaj sekcje w katalogu
     - kolejność importów - zachowuj spójność w kolejności importów. Na przykład, najpierw importuj biblioteki zewnętrzne, potem komponenty, a na końcu style.
     - reużywalność - staraj się tworzyć reużywalne komponenty. Każda sekcja może mieć ten sam layout, ale przyjmować inną zawartość jako children
   - elementy wektorowe, takie jak ikony zaimportuj do projektu jako tag svg
   - możesz stworzyć strukturę danych jako tablice obiektów których wartości są przekazywane do komponentów, oraz przekazywać treści do reużywalnych komponentów jako propsy
   - jest to single page app, więc nie musimy dodawać elementów nawigacji - to dodamy na kolejnej lekcji :)
   - DLA CHĘTNYCH\* - możesz dodać działanie nawigacji, które będzie po kliknięciu scrollować do danej sekcji strony
