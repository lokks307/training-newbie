# git branch 다루기 tutorial

열심히 직진하는 여러분을 보며 어떻게 해야할까 고민하다가 새벽에 쓰는 글입니다...

프롤로그는 훈련에 참여하는 여러분을 생각하며 전지적 1인칭 주인공 시점으로 작성했습니다.

## 프롤로그 - 지금 나의 모습

나는 피땀눈물 연습 과정에 참여하기로 결정했다. 이제부턴 정말 실전 공부 뿐이야! 일단 브랜치를 만들고 열심히 문제를 풀었다.

```
git checkout -b feature/day1
git add .
git commit -m "#ADD - day1 [p001 ~ p015]"
```

오늘 해야하는 연습을 모두 마쳤다.

참고 이미지 1
<div style="text-align: center;" >
<img src="image/branch.01.jpg" width="360"/>
<br>
<p>하나의 브랜치를 파고 계획대로 커밋을 만들었다! 뿌듯 - * </p>
</div>

[PR #1 link 바로 가기](link1)

그리고 upstream repository (github.com/lokks307/training-newbie)에 PR을 등록했다.
시원하게 샤워 한 번 하고 왔는데, 시간을 보니 여유가 조금 있다. 오늘은 어쩐지 운수가 좋은 느낌인걸? 호기롭게 day2 문제를 조금 더 풀어보자.

```
git checkout -b feature/day2
git add .
git commit -m "#ADD - day2 [p016 ~ p030]"
```

참고 이미지 2
<div style="text-align: center;" >
<img src="image/branch.02.jpg" width="360"/>
<br>
<p>day1 위치에서 하나의 브랜치를 더 파고 day2를 진행한다. 나는 git을 좀 잘 다루는 것 같다. </p>
</div>

[PR #2 link 바로 가기](link2)
day2까지 푼 문제도 PR로 등록했다. 기분 좋게 잠들 수 있을 것 같다.

(다음 날)

자고 일어나니 dos가 `feature/day1`에 리뷰를 잔뜩 달았다.
아니 이렇게나 많은 리뷰가.......
정신 차리고 하나씩 수정해보자!

어...그런데 어떻게 하지? dos의 리뷰대로 코드를 수정하려고하니 머리가 정지되는 느낌을 받는다. 나는 지금 `feature/day2` 브랜치에 있는데 리뷰는 온통 `feature/day2`에 달려있는 걸..?
어...? day1 리뷰에 있는 코드를 어떻게 수정하지?

...

---

지금부터 예시를 통해 git branch 와 github를 이용하는 방법을 다룹니다.

## 리뷰 받은 코드를 수정하기

리뷰 받은 브랜치로 이동한 뒤 리뷰에 따라 코드를 수정하세요.

```
git co feature/day1
(리뷰 받은대로 코드를 수정)
git add .
git cm -m "FIX - 리뷰 받은 내용 모두 수정"
```

그럼 이런 모양이 만들어 집니다.

<div style="text-align: center;" >
<img src="image/branch.03.jpg" width="360"/>
<br>
<p>뭐야 무서워...뭔가 잘못된 것 같아요 선생님.. </p>
</div>

왠지 망한거 같다구요...? 그렇지 않습니다.
리뷰를 받았으면, <B>리뷰 받은 브랜치에서 코드를 수정하고 커밋하세요. 그리고 origin repo에 push 하세요.</B>

문제를 풀 때는 다시 feature/day2로 이동하세요. 마치 day1에 아무런 문제가 없는 것 처럼. 마치 day1과 처음부터 관련이 없는 것 처럼.

```
git co feature/day2
```

day2는 모두 푸셨다고요? 그럼 그 위치에서 `feature/day3`를 만드세요

```
git co -b feature/day3
```

그럼 이런 모양이 되었을 거예요.
<div style="text-align: center;" >
<img src="image/branch.04.jpg" width="360"/>
<br>
<p> .. (속는셈 치고 따라하자) </p>
</div>

그리고 문제를 풉니다.

```
git add .
git cm -m "#ADD - day3 [p031 ~ p045]"
```

day3까지 커밋을 올리면 이런 모양이 됩니다.

<div style="text-align: center;" >
<img src="image/branch.05.jpg" width="360"/>
<br>
<p> .. (day1이랑 너무 멀어진 것 같은 day3)</p>
</div>

dos가 `feature/day1` 의 수정사항을 모두 확인하고 upstream repository (github.com/lokks307/training-newbie) 의 main 브랜치에 코드를 반영해주었습니다! 

---

그럼 이제 여러분이 fork한 `github repository`에서 upstream의 최신 사항을 반영할 차례입니다.

<div style="text-align: center;" >
<img src="image/branch.06.jpg" width="360"/>
<br>
<p> upstream(github/lokks307/training-newbie) 브랜치가 바뀌자 나의 github에서 친절하게 알려준다. sync하자. </p>
</div>

day2, day3은 잊고 그냥 하세요. 괜찮습니다.

그랬더니!
진짜 망한 것 같은 모양이 나옵니다! 이런 건 본적이 없어서 가슴이 두근거리고 심박수가 올라갑니다.

<div style="text-align: center;" >
<img src="image/branch.07.jpg" width="360"/>
<br>
<p> .. 과거의 코드가 가장 최신 코드가 된 것 같다. 나의 day2, day3는 어떻게 되는가..</p>
</div>

눈물이 앞을 가립니다. '내가 몇시간을 쏟아부어서 문제를 풀었는데... ㅠㅠ' 라고 생각하실지도 모르겠네요.
괜찮아요. 날라간건 아무것도 없습니다.

이제 여러분의 컴퓨터, workspace로 이동하세요.

이 명령어를 입력하세요

```
git fetch origin --prune
(대충 origin의 main 브랜치가 바뀌었다는 설명)
git co main
git merge origin/main
(대개 fast-forward 라고 나옴 - fast-forward가 뭘까요? ㅎㅎ)
```

<div style="text-align: center;" >
<img src="image/branch.08.jpg" width="360"/>
<br>
<p> workspace의 `main`에 `origin/main` 의 변경사항을 반영한다. </p>
</div>

조금 길어졌지만 정신을 차려보세요.
지금 여러분이 가진 main 브랜치는 day1의 첫 코드 + 리뷰 후 수정된 코드가 담겨 있습니다.

day2는 이 내용을 가져오기만 하면 돼요.

```
git co feature/day2
git merge main
git push origin feature/day2
```

<div style="text-align: center;" >
<img src="image/branch.09.jpg" width="360"/>
<br>
<p> 시간 차이가 조금 있지만, day2 브랜치를 보니 day1의 모든 수정 내용이 반영되었다! main을 머지했기 때문이다. 이걸 push하자 내가 올린 PR에도 이 내용이 자연스럽게 반영되어있다. </p>
</div>

어, 그런데 이번엔 day3이 어긋난 것처럼 보입니다.
day3의 기준점은 day2였죠?

그런데 방금 수행한 명령어로 인해 기준점인 day2가 바뀌었습니다.
그럼 이제 어떻게 하면 되나요?

day3 브랜치로 이동 후, day2를 머지하면 됩니다.

```
git checkout feature/day3
git merge feature/day2
```

<div style="text-align: center;" >
<img src="image/branch.10.jpg" width="360"/>
<br>
<p> day3는 day1+ 와 day2를 모두 담은, 가장 최신의 브랜치가 되었다. 이어서 문제를 풀면 된다. </p>
</div>

사실 이 과정은 여러분이 branch를 만들고 develop 브랜치를 최신화하는 것과 정확하게 똑같은 원리로 동작합니다.
운이 조금 나쁘게 원리를 제대로 설명해주는 사람을 못 만났거나, 'develop 브랜치가 바뀌었으니 pull 해야지' 하고 원리도 모른채 `git pull`을 남용해서 생긴 지식의 공백입니다.

입사하시게 되면 git은 다시 제대로 배우게 될 거예요.

---

git. 뭐라고 배우셨나요?
버전 관리 시스템?

누가 git을 버전 관리 시스템이라고 소개했는지 저는 잘 모릅니다.

git은 `버전 관리` - version management 시스템이 아닙니다.
git은 `버전 제어` - version control 시스템입니다.

git은 제어 도구입니다. 관리 대상이 아닙니다.
git은 연필처럼 쓰고 지우개처럼 지우고, 포스트잇처럼 이리 떼었다 저리 붙이는 버전 제어 도구입니다.
git은 내가 사용할 도구입니다.

DO NOT 시리즈
git을 소중하게 관리하려고 들지 마세요.
git 이력을 예쁘게 관리하려고 들지 마세요.
git을 마치 정답이 있는 것처럼 사용하려고 하지 마세요.

git에 정답만 기록하려고 들면 그때부터 망가지기 시작합니다.

git은 과거 시점 어디로든 이동할 수 있게 도와주고, 과거와 현재를 자유롭게 넘나들며 코드를 조립할 수 있도록 돕습니다.
자유롭게 쓰세요.
그런데 자유롭게 쓰려면 git을 잘 알아야합니다.

이제부턴 정말 공부뿐이야!

---

git 초보자 한정 
- git pull 금지
- GUI 사용 금지.

더 자세한 내용은 입사 후 교육과정에서 배우시게 될 거예요.
