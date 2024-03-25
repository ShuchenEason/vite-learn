# jupyterlite 部署

## 说明文档

### 学习

https://blog.jupyter.org/jupyter-everywhere-f8151c2cc6e8

### 官方

https://jupyterlite.readthedocs.io/en/latest/quickstart/deploy.html

### youtube

https://www.youtube.com/watch?v=WXRslU9D3bo

## 部署位置

https://shucheneason.github.io/custom-py/lab/index.html

## github 工作流

https://github.com/ShuchenEason/custom-py/actions/runs/8414821913

# JupyterNote

## python

https://blog.csdn.net/qq_43479622/article/details/97172796

版本

## pytorch

https://pytorch.org/get-started/locally/

## iframe

https://juejin.cn/post/7088132749487243295
https://blog.csdn.net/zxm1306192988/article/details/88601249

# 报错解决

## ImportError

ImportError:
BertForSequenceClassification requires the PyTorch library but it was not found in your environment. Checkout the instructions on the
installation page: https://pytorch.org/get-started/locally/ and follow the ones that match your environment.
Please note that you may need to restart your runtime after installation.
这个报错我搞如何处理，执行那些命令，给出具体解决思路和代码

这个错误表明你的环境中缺少 PyTorch 库，而`BertForSequenceClassification`是`transformers`库中的一个类，它依赖于 PyTorch。要解决这个问题，你需要安装 PyTorch。以下是安装 PyTorch 的步骤：

1. 访问 PyTorch 的官方安装指南页面：[PyTorch Get Started](https://pytorch.org/get-started/locally/)。

2. 根据你的系统环境（操作系统、包管理器、Python 版本、CUDA 版本等）选择合适的安装命令。

3. 在你的 Python 环境中执行相应的安装命令。如果你使用的是 pip，通常的安装命令如下（这里假设你不需要 CUDA 支持）：

```bash
pip install torch torchvision torchaudio
```

如果你需要 CUDA 支持，你应该选择适合你 CUDA 版本的命令，例如：

```bash
pip install torch torchvision torchaudio -f https://download.pytorch.org/whl/torch_stable.html
```

4. 安装完成后，重新启动你的 Jupyter Notebook 运行时环境。

5. 再次尝试运行你的代码，看看`BertForSequenceClassification`是否可以成功导入。

如果你在 Jupyter Notebook 中，可以直接在一个代码单元中运行安装命令，如下：

```python
!pip install torch torchvision torchaudio
```

或者，如果需要特定版本的 CUDA 支持：

```python
!pip install torch torchvision torchaudio -f https://download.pytorch.org/whl/torch_stable.html
```

请注意，如果你使用的是一个受限环境（如某些在线 Jupyter 环境），你可能无法安装新的库。在这种情况下，你需要使用一个允许你安装额外库的环境。

## Browser Error

执行 jupyternote 过程中报错[Open Browser Console for more detailed log - Double click to close this message] Failed to load model class 'HBoxModel' from module '@jupyter-widgets/controls' Error:

这个错误通常是由于 JupyterLab 中的`@jupyter-widgets/controls`模块版本不匹配或未正确安装导致的。`HBoxModel`是 Jupyter Widgets 的一部分，用于在 Jupyter 环境中创建水平布局的盒子。

要解决这个问题，你可以尝试以下步骤：

1. 确保你的 JupyterLab 和相关的 widget 扩展是最新版本的。你可以使用以下命令来更新 JupyterLab：

```bash
pip install --upgrade jupyterlab
```

2. 安装或更新`@jupyter-widgets/jupyterlab-manager`扩展，这是 JupyterLab 的 widget 扩展，它允许你使用 Jupyter Widgets。你可以使用以下命令来安装或更新它：

```bash
jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

3. 如果你之前已经安装了`@jupyter-widgets/jupyterlab-manager`，但是版本不匹配，你可能需要更新它。使用以下命令来更新：

```bash
jupyter labextension update @jupyter-widgets/jupyterlab-manager
```

4. 重启 JupyterLab 服务。

5. 清除浏览器缓存，以确保浏览器加载的是最新的扩展版本。

6. 重新打开 JupyterLab 并检查问题是否解决。

如果问题仍然存在，你可能需要检查你的环境中是否有其他版本冲突或依赖问题，并相应地解决它们。在某些情况下，完全卸载并重新安装 JupyterLab 和相关扩展可能是解决问题的最快方法。

## jupyter 版本问题

```bash
jupyter labextension list
```

```bash
pip check
```

这个错误信息表明你的环境中存在依赖冲突：`ipywidgets` 需要一个版本在 `1.0.0` 到 `3.0.0` 之间（不包括 `3.0.0`）的 `jupyterlab-widgets`，但是你安装的是 `jupyterlab-widgets` 的 `3.0.10` 版本，这超出了 `ipywidgets` 兼容的版本范围。

要解决这个问题，你需要安装一个与 `ipywidgets` 兼容的 `jupyterlab-widgets` 版本。你可以按照以下步骤操作：

1. 首先，卸载当前不兼容的 `jupyterlab-widgets` 版本：

```bash
pip uninstall jupyterlab-widgets
```

2. 然后，安装一个与 `ipywidgets` 兼容的 `jupyterlab-widgets` 版本。由于 `ipywidgets 7.8.1` 要求 `jupyterlab-widgets` 版本小于 `3` 且大于等于 `1.0.0`，你可以安装最新的兼容版本，例如：

```bash
pip install 'jupyterlab-widgets<3,>=1.0.0'
```

3. 确认安装后的版本是否解决了依赖冲突：

```bash
pip check
```

4. 如果没有报错，那么依赖冲突应该已经解决。重新启动 JupyterLab 并检查问题是否已经解决。

如果你仍然遇到问题，可能需要考虑创建一个新的虚拟环境，然后在其中安装所需的包，以避免全局环境中的版本冲突。使用 `virtualenv` 或 `conda` 可以帮助你管理不同项目的依赖。

这个报错信息表明你的 JupyterLab 环境中有一些扩展的版本已经过时了。具体来说，`jupyterlab-plotly` 和 `@jupyter-widgets/jupyterlab-manager` 这两个扩展有更新的版本可用。要更新这些扩展，你可以按照以下步骤操作：

1. 更新 `jupyterlab-plotly` 扩展：

```bash
jupyter labextension update jupyterlab-plotly
```

2. 更新 `@jupyter-widgets/jupyterlab-manager` 扩展：

```bash
jupyter labextension update @jupyter-widgets/jupyterlab-manager
```

3. 更新完成后，你可以再次运行 `jupyter labextension list` 来确认扩展是否已经更新到最新版本。

4. 重启 JupyterLab 以确保更新生效。

如果你遇到任何问题，或者更新命令不起作用，你可能需要检查你的 JupyterLab 版本是否与扩展的最新版本兼容。有时，扩展的最新版本可能需要更新的 JupyterLab 版本。如果是这种情况，你可能需要先更新 JupyterLab：

```bash
pip install --upgrade jupyterlab
```

然后再尝试更新扩展。

请注意，如果你使用的是 conda 环境，你可能需要在 conda 环境中运行这些命令，而不是系统全局环境中。此外，有时直接使用 `pip` 安装或更新 JupyterLab 扩展可能更为直接有效，例如：

```bash
pip install --upgrade plotly
```

这将更新 `plotly`，这可能会间接更新 `jupyterlab-plotly` 扩展。类似地，更新 `ipywidgets` 可能会更新 `@jupyter-widgets/jupyterlab-manager` 扩展：

```bash
pip install --upgrade ipywidgets
```

在执行任何更新操作后，确保重启 JupyterLab 服务以应用更改。

```bash
pip install --upgrade notebook
```

# jupyternote配置

https://discourse.jupyter.org/t/while-showing-notebook-inside-my-website-iframe-it-shows-couldnt-authenticate-websocket-connection-and-codes-are-not-executed/24611